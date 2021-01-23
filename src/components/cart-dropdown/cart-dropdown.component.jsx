import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';//Access to History
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {

    return (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
              cartItems.length > 0 ?
                    cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })  
              : <span className='empty-message' >Your Cart is empty</span>
            }
        </div>
        <CustomButton type='button'
                      onClick={() => {
                      dispatch(toggleCartHiddenAction()) 
                      history.push('/checkout')}} >
            GO TO CHECKOUT
        </CustomButton>
    </div>
    );
}

//improve performance by implementing memozization with selectors 
//we are not changing the props when there is a State change
const mapStateToProps = (state) => {

    return {
        cartItems : selectCartItems(state)
    }
}

//connect will pass the prop dispatch into our component
export default withRouter(connect(mapStateToProps)(CartDropDown));


