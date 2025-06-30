import { useState } from "react";
import CartContext from './CartContext';

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    //Add to Cart
    const addToCart  = (item) => {
        const isExist = cartItems.find(cart => cart.id === item.id);
        if(isExist){
            setCartItems(
                cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem)
            )
        }else{
            setCartItems(prev => [...prev, item])
        }
        
    }

    //Remove From Cart
    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    }
    return ( 
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength: cartItems.length
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;