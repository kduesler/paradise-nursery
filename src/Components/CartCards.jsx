import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import  "../Styles/CartCard.css"

function CartCard() {
  const { cart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h2>Your Cart: {cart.length}</h2>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() =>removeFromCart(item.id)}>remove item</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartCard;
