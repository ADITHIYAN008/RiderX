import React from "react";
import Navbar from "./components/Navbar";
import FeaturedBikes from "./components/FeaturedBikes";
import NewArrivals from "./components/NewArrivals";
import BikeCategories from "./components/BikeCategories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <FeaturedBikes />
      <NewArrivals />
      <BikeCategories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
