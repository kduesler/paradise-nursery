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
      <div>
        <button className="purchase" onClick={() => alert("Soon to be developed")}>Purchase</button>
      </div>
    </>
  );
}

export default CartPage;
