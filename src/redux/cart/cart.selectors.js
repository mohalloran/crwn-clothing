import { createSelector } from 'reselect';

//input selector get the whole state and returns a slice of it .
const selectCart = (state) => {
    return state.cart;
}
//const selectUser = (state) => state.user;

//memoized selector
//take array of input Selectors
//Second value is a function that will return the value we want out of it 
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems

)
//memoized selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity,0) 
)