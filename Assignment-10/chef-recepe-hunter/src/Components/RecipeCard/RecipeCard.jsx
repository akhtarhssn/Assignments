import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="shadow-xl rounded-xl p-5 border text-center">
      <div className="h-60 ">
        <img
          className="h-full mx-auto rounded-xl"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="w-2/4 h-0.5 bg-gray-300 my-10 mx-auto"></div>
      <h3 className="text-lg font-semibold my-5">
        <Link to={""}>{recipe.title}</Link>
      </h3>
      <Link to={`/recipe/${recipe.id}`}>
        <button className="bg-[#C59D5F] py-3 px-10 rounded-md font-semibold text-white mb-5">
          Check Recipe
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
