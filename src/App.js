// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import LandingPage from "./Pages/LandingPage";
import CartPage from "./Pages/CartPage";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
