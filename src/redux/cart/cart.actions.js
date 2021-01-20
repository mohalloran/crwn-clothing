import {CartActionTypes as type} from './cart.types';

const toggleCartHiddenAction = () => {
    return {
        type: type.TOGGLE_CART_HIDDEN
    }
} 

export default toggleCartHiddenAction;