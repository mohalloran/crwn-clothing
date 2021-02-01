import React from 'react';
import { connect } from 'react-redux';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

//destructering props
const CollectionItem = ({item, addItem }) => {

    const { name, price, imageUrl} = item;
    
    return (
        <div className='collection-item'>

            <div 
                className='image' 
                style={{ backgroundImage:`url(${imageUrl})`}}
            />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted='inverted' onClick={() => addItem(item) } >Add To Cart</CustomButton> 

        </div>
    )
}

export default connect(null,{addItem})(CollectionItem);
