import React from 'react';
import { Link } from 'react-router-dom';  // Import Link correctly
import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
      {/* Correct Link component usage */}
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          <div className="item-price-new">
            ${props.new_price}
          </div>
          <div className="item-price-old">
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;