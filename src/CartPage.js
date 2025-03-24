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

function CartPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is the Cart Page</h2>
      <button className="home" onClick={() => navigate("/")}>
        Home
      </button>
      <p>See your soon to be purchased items here.</p>
    </div>
  );
}

export default CartPage;
