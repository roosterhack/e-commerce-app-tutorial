import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/Cart-item.component';
import { useSelector } from 'react-redux';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};
