import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => {

    return (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
              cartItems.map((cartItem) => {
                 return <CartItem key={cartItem.id} item={cartItem} />
              })  
            }
        </div>
        <CustomButton type='button' >GO TO CHECKOUT</CustomButton>
    </div>
    );
}

const mapDispatchToProps = ({cart:{cartItems}}) => {

    return {
        cartItems :cartItems
    }
}

export default connect(mapDispatchToProps)(CartDropDown);


