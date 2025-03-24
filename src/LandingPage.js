import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import React from "react";

//styling

import "./App.css";

// import components
import Background from "../src/assets/LandingPageBackground.jpg";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          background: "rgba(134, 243, 207, 0.48)",
          borderRadius: "10px", // Added rounded edges
          padding: "10px", // Added padding for better appearance
        }}
      >
        Paradise Nursery
      </h1>
      <p style={{
          background: "rgba(149, 243, 212, 0.46)",
          borderRadius: "10px", // Added rounded edges
          padding: "10px", // Added padding for better appearance
        }}>Welcome to Paradise Plant Nursery—your ultimate green haven! Whether you're a seasoned gardener or just starting your journey, we provide a lush selection of plants, from vibrant flowers to hardy succulents, all nurtured with care. With expert advice, sustainable practices, and a passion for growth, we’re here to help you bring a slice of paradise into your home or garden. Let's grow together!</p>
      <button className="home" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="cart" onClick={() => navigate("/cart")}>
        Cart
      </button>
      <p></p>
    </div>
  );
}

export default LandingPage;
