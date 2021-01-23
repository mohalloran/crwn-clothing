import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    
    const { imageUrl, name, price, quantity} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className='name'>
                <span>{name}</span>
            </div>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>
                <span>{price}</span>
            </div>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}  >
                &#10005;
            </div>
        </div> 
    )   

}

export default connect(null, {clearItemFromCart, removeItem, addItem})(CheckoutItem);