import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IpKzeJ15susIN9droJU9AQkFpKKJZdurGImzLbCRwzdkdxDPz5TnRrSt3ckLuVdT1uAOaf3hjcHKFaK7eXsQ6Qe00a5Hviybe';
    const onToken = token => {
        console.log(token);
        alert('Payment Success');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='VICTORS CLOTHING Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
