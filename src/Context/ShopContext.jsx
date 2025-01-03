import React, {createContext, useEffect, useState} from "react";






export const ShopContext = createContext(null);



    const getDefaultCart =()=>{
        let cart ={};
        for (let index = 0; index < 300+1; index++) {
          cart[index]=0;
            
        } 
        return cart;
    }
    const ShopContextProvider = (props)=>{
        const [all_product, setAll_product]= useState([]);
        const[cartItems,setCartitems]= useState(getDefaultCart());

        useEffect(()=>{
            fetch('http://localhost:4000/allproducts')
            .then((response)=>response.json())
        .then((data)=>setAll_product(data))
        },[])
    
    
   const addToCart =(itemId)=>{
setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(cartItems);

   }
   const removeFromCart =(itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       }
// const getTotalCartAmount =()=>{
//     let totalAmount =0;
//     for (const item in cartItems)
//     {
//         if(CartItems[item]>0)
//         {
//             let itemInfo = all_product.find((product)=> product.id===Number(item));
//             totalAmount += itemInfo.new_price* cartItems[item];
//         }
        
//         return totalAmount;
//     }
// }
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) { // Use cartItems, not Cartitems (case-sensitive)
            let itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) { // Ensure itemInfo exists to prevent errors
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
    }
    return totalAmount; // Return after completing the loop
};

const getTotalCartItems= ()=> {
    let totalItem=0;
    for(const item in cartItems)
    {
        if (cartItems[item]>0)
        {
            totalItem+= cartItems[item];
        }
    }
    return totalItem;
}


       const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;