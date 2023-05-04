import React from "react";

const RecipeDetailsCard = ({ recipeDetails }) => {
  const { title, image, description, details } = recipeDetails;
  return (
    <div>
      {/* Banner */}
      <div className="relative bg-center bg-cover h-80 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-80 mb-20">
        <img
          className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
          src="https://fastwpdemo.com/newwp/ticrou/wp-content/themes/ticrou/assets/images/background/page-title.jpg"
          alt=""
        />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>
            <p className="text-lg text-white">{description}</p>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="max-w-7xl container mx-auto p-5 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center ">
          <div className="col-span-4 border-2 rounded-xl p-10 overflow-hidden">
            <img
              className="bg-center bg-cover  rounded-xl hover:scale-125 duration-500 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="col-span-8">
            <h2 className="text-3xl font-bold my-2">{title}</h2>
            <p className="text-gray-500 "> {description} </p>
            <p className="text-gray-500 my-5">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
