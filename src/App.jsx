import React from "react";
import Navbar from "./components/Navbar";
import FeaturedBikes from "./components/FeaturedBikes";
import NewArrivals from "./components/NewArrivals";
import BikeCategories from "./components/BikeCategories";

const App = () => {
  return (
    <>
      <Navbar />
      <FeaturedBikes />
      <NewArrivals />
      <BikeCategories />
    </>
  );
};

export default App;
