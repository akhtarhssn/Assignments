import React from "react";
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../Components/Navbar/NavigationBar";
import RecipeDetailsCard from "../../Components/RecipeDetailsCard/RecipeDetailsCard";

const RecipeDetails = () => {
  const recipeDetails = useLoaderData();
  console.log(recipeDetails);
  return (
    <div>
      <NavigationBar />
      <RecipeDetailsCard recipeDetails={recipeDetails} />
    </div>
  );
};

export default RecipeDetails;
