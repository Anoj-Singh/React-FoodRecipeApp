import React from "react";

const Recipe = ({ recipe, altProp }) => {
  return (
    <div
      className="recipeItem"
      onClick={() => {
        window.open(recipe["recipe"]["url"]);
      }}
    >
      <img className="recipe-img" src={recipe["recipe"]["image"]} alt={altProp}/>
      <p className="recipe-label">{recipe["recipe"]["label"]}</p>
    </div>
  );
};

export default Recipe;
