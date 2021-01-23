export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => (cartItem.id === cartItemToAdd.id));
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === existingCartItem.id 
            ? {...cartItem,quantity: cartItem.quantity + 1}
            : {...cartItem}    
        )
   }
   return [...cartItems,{...cartItemToAdd, quantity: 1}]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    console.log('Removing Item from the Cart..');
    let existingCartItem = cartItems.find((cartItem) => (cartItem.id === cartItemToRemove.id));
    console.log('existingCartITem is',existingCartItem);
    //if the quantity of cartItemToRemove > 1
    //Decrease the Quantity by 1
    if(existingCartItem){
        if(existingCartItem.quantity > 1){
            return cartItems.map( (cartItem) =>{
                 
                 if (cartItem.id === cartItemToRemove.id){
                   
                   return {...cartItem,quantity: cartItem.quantity -1}
                 } 
                 return cartItem; 
                 
            })
            //let tempCartItems = cartItems.filter( (cartItem) => cartItem.id !== cartItemToRemove.id)
            //return [...tempCartItems,{...existingCartItem,quantity: existingCartItem.quantity - 1}]
        }else{//remove cartItem
            return cartItems.filter( (cartItem) => cartItem.id !== cartItemToRemove.id)
        }
    }
   
}