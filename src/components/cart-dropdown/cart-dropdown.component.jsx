import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

//improve performance by implementing memozization with selectors 
//we are not changing the props when there is a State change
const mapDispatchToProps = (state) => {

    return {
        cartItems : selectCartItems(state)
    }
}

export default connect(mapDispatchToProps)(CartDropDown);


