import React, { useState, useEffect, useContext, createContext } from "react";

import "../Styles/ProductCards.css";
import CartCard from "./CartCards"
import { CartContext } from "../Context/CartContext";


const plantProducts = [
  {
    id: 1,
    name: "Peace Lily",
    description:
      "A graceful indoor plant with white flowers and lush green leaves, purifies the air.",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/11736421/pexels-photo-11736421.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Snake Plant",
    description:
      "A hardy plant with tall, striped leaves. Perfect for low-light spaces.",
    price: 15.49,
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    description: "Large, glossy leaves that add a tropical vibe to any room.",
    price: 25.99,
  },
  {
    id: 4,
    name: "Succulent Mix",
    description:
      "A collection of small, colorful succulents for easy maintenance.",
    price: 9.99,
  },
  {
    id: 5,
    name: "Basil",
    description:
      "A fragrant herb ideal for culinary dishes and easy to grow indoors.",
    price: 6.99,
  },
  {
    id: 6,
    name: "Aloe Vera",
    description: "A medicinal plant with thick leaves full of soothing gel.",
    price: 10.99,
  },
  {
    id: 7,
    name: "Monstera",
    description: "Iconic split leaves that bring elegance to any space.",
    price: 29.99,
  },
  {
    id: 8,
    name: "Cactus Trio",
    description:
      "A set of three small, spiky cactus plants for a desert theme.",
    price: 14.99,
  },
  {
    id: 9,
    name: "Lavender",
    description:
      "A flowering herb that adds a calming scent and delicate purple blooms.",
    price: 8.99,
  },
  {
    id: 10,
    name: "Pothos",
    description:
      "A vining plant with heart-shaped, variegated leaves. Great for hanging planters.",
    price: 11.49,
  },
];


function ProductCard() {
 
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div>
        {plantProducts.map((plant) => (
          <div key={plant.id} className="productCard">
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <p>${plant.price}</p>
            <button
              className="addToCartButton"
              onClick={() => addToCart(plant)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
