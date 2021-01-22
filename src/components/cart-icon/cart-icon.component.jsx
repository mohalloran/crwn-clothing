import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = (props) => {

    return (
        <div className='cart-icon' onClick={props.toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{props.itemCount}</span>
        </div>
    )
   
}

const mapStateToProps = (state) => {
    return {
        itemCount : selectCartItemsCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        toggleCartHidden: () => dispatch(toggleCartHiddenAction())
   }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);