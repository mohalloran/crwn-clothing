import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;//has to be in Cents
    const publishableKey = 'pk_test_51IG9efIU3tyGjsSsHRxyOC9Xy1oH17ih2Vf9VM8BKsQtj2DTgytMzm3QlrpjgCEWga5GEBP4pnjBxWRBqlrgerbM009zj89S7f';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout 
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your Total is $${price} `}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;