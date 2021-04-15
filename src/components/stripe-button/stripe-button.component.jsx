import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;

  const publishableKey =
    'pk_test_51H72qTFNByb1GjwzzvBkylX4sOwgb3M8cKSYgMAk17RIXrSi7FNtfCw7USZxfuoOgG3naMwj5r4wPunW8nFB8qTX00ClBPlO91';

  const onToken = (token) => {
   
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Emark Clothing Ltd"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
