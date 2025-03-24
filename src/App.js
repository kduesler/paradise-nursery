// src/App.js

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

import LandingPage from "./LandingPage";
import CartPage  from "./CartPage";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="content">
        <div className="landingWelcome">
          <h1>Welcome to the nursery</h1>
          <p>You'll find pretty flowers here at this wonderful store</p>
          <button className="start" onClick={() => navigate("/landing")}>
            Start!
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/landing" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
