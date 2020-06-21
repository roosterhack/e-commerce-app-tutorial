import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) =>  state.cart.cartItems)
    

  const numOfItems = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{numOfItems}</span>
    </div>
  );
};
