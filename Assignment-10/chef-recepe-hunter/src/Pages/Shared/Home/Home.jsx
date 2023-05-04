import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../../Components/Banner/Banner";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  return (
    <div className="max-w-7xl container mx-auto my-16">
      <Banner />
      <Recipes />
    </div>
  );
};

export default Home;
