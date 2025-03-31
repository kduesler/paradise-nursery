import React from "react";

//styling
import "../Styles/LandingPage.css";

// import components
import NavBar from "../Components/NavBar";

function LandingPage() {
  return (
    <>
      {<NavBar />}
      <div className="LandingPage">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Plant Nursery—your ultimate green haven! Whether
          you're a seasoned gardener or just starting your journey, we provide a
          lush selection of plants, from vibrant flowers to hardy succulents,
          all nurtured with care. With expert advice, sustainable practices, and
          a passion for growth, we’re here to help you bring a slice of paradise
          into your home or garden. Let's grow together!
        </p>

        <p></p>
      </div>
    </>
  );
}

export default LandingPage;
