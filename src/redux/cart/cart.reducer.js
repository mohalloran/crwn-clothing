import {CartActionTypes as type} from './cart.types'; 
import { addItemToCart, removeItemFromCart } from './cart.utils';
const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=initialState, action) => {
    console.log('ACTION TYPE IS:',action.type);

    switch(action.type){
        
        case type.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case type.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        case type.REMOVE_ITEM:
            console.log('Reducer RemoveItem');
            //removeItemFromCart(state.cartItems,action.payload);
            return {
               ...state,
               cartItems: removeItemFromCart(state.cartItems,action.payload)

            }
        case type.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( (cartItem) => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer;