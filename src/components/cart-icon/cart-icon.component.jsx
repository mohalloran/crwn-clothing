import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import toggleCartHiddenAction from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = (props) => {

    return (
        <div className='cart-icon' onClick={props.toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
   
}

const mapDispatchToProps = (dispatch) => {
   return {
        toggleCartHidden: () => dispatch(toggleCartHiddenAction())
   }
}
 
export default connect(null, mapDispatchToProps)(CartIcon);