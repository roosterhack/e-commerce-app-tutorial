import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HJLNyAplX5bNoHwD5viOPeiOV5VufwS2wW2GOLYpaS7oD5mPUAg5MUOcGdkrk9iTGWWcUSYTb02pP09BkI6urdD00CN8fsv9X';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='crown clothing ltd'
      billingAddress
      shippingAddress
      iamge='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripekey={publishableKey}
    />
  );
};
