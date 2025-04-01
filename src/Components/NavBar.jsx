import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../Styles/NavBar.css";
import CartCard from "./CartCards";
import { CartContext } from "../Context/CartContext";


function NavBar() {
  const navigate = useNavigate();
  const {cart} = useContext(CartContext);
  
  return (
    <>
      <div className="navBarStyle">
        <div className="homeProductsContainer">
          <button className="homeButton" onClick={() => navigate("/")}>
            Home
          </button>
          <button
            className="productsButton"
            onClick={() => navigate("/products")}
          >
            Products
          </button>
        </div>
        <div className="cartContainer">
          <button
            className="cartButton"
            onClick={() => navigate("/cart")}
          ></button>
          <p className="cartAmount">{cart.length}</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
