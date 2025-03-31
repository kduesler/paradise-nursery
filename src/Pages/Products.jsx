import React from "react";

import NavBar from "../Components/NavBar";
import ProductCard from "../Components/ProductCards"
import "../Styles/Products.css";

function Products() {
  return (
    <>
    {<NavBar />}
      <div className="productsPage">
        <h1>This is the Products Page</h1>
        {<ProductCard />}
      </div>
    </>
  );
}

export default Products;
