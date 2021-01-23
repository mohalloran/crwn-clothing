import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem:{id, imageUrl, name, price, quantity}}) => {
    
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className='name'>
                <span>{name}</span>
            </div>
            <div className='quantity'>
                <span>{quantity}</span>
            </div>
            <div className='price'>
                <span>{price}</span>
            </div>
            <div className='.remove-button'>
                &#10005;
            </div>
        </div> 
    )   

}

export default CheckoutItem;