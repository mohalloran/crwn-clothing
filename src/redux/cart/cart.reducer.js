import {CartActionTypes as type} from './cart.types'; 
const initialState = {
    hidden: true
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){

        case type.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer;