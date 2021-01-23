import {CartActionTypes as type} from './cart.types';

export const toggleCartHiddenAction = () => {
    return {
        type: type.TOGGLE_CART_HIDDEN
    }
}

export const removeItem = (item) => {
    console.log('Action Remove Item');
    return {
        type: type.REMOVE_ITEM,
        payload: item
    }
}

export const addItem = (item) => {
    return {
        type: type.ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: type.CLEAR_ITEM_FROM_CART,
        payload: item
    }
} 
