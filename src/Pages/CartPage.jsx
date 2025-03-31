import React from "react";

//styling
import "../Styles/CartPage.css";
// import components
import NavBar from "../Components/NavBar";
import CartCard from "../Components/CartCards";

function CartPage() {
  return (
    <>
      {<NavBar />}
      <div className="cartPage">
       {<CartCard />}
      </div>
    </>
  );
}

export default CartPage;
