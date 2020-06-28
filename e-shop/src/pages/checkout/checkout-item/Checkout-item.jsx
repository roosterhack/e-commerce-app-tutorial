import React from "react";
import { useDispatch } from "react-redux";
import "./Checkout-item.scss";

export const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10008;</span>
    </div>
  );
};
