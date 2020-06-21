import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/Cart-item.component';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const history = useHistory();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem item={cartItem} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        Go to checkout
      </CustomButton>
    </div>
  );
};
