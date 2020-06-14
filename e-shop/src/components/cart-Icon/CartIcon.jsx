import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch } from "react-redux";
import { CartActionTypes } from "../../redux/cart/cart.types";

export const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN })}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
