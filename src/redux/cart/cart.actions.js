import {CartActionTypes as type} from './cart.types';

export const toggleCartHiddenAction = () => {
    return {
        type: type.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) => {
    console.log('Adding ITEM:',item);
    return {
        type: type.ADD_ITEM,
        payload: item
    }
} 
