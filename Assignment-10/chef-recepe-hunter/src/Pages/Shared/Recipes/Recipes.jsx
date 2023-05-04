import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../../Components/RecipeCard/RecipeCard";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  console.log(recipe);
  return (
    <div className="my-16">
      <h1 className="text-3xl text-center font-bold">Our Recipes:</h1>
      {recipe.map((chef) => (
        <div key={chef.id}>
          <div className="flex justify-between">
            <div></div>
            <div className="w-60">
              {/* Category */}

              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <h4 className="text-lg font-bold mt-5 mb-5">
            {chef.cuisine} Cuisine
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {chef.recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
