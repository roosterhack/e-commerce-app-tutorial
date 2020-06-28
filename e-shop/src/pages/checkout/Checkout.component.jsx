import React from "react";
import { useSelector } from "react-redux";
import { CheckoutItem } from "./checkout-item/Checkout-item";
import "./checkout.styles.scss";

export const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (accumalateQuantity, cartItem) =>
      accumalateQuantity + cartItem.quantity * cartItem.price,
    0
  );
  // const totalPrice =
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quality</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">${total}</div>
    </div>
  );
};
