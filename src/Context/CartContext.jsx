import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    console.log("Removing product from cart:", id);
    setCart(cart.filter((item) => item.id !== id));
    console.log("New cart after removal:", cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

