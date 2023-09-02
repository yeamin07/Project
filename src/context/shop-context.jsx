import { createContext, useState } from "react"
import { PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0; // Cart কে primary অবস্থায় ফাঁকা রাখার জন্য এই লজিক
    }
    return cart
}
/**
 * Run this to underStand
 * let cart = {}
    for (let i = 1; i < 9; i++) {
        cart[i] = 0; 
        console.log(cart)
    }
 */
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let i = 1; i <= PRODUCTS.length; i++) {
            if (cartItems[i] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(i));
                totalAmount += cartItems[i] * itemInfo.price;
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        // console.log(itemId);
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const checkout = () => {
        setCartItems(getDefaultCart())
    }

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



