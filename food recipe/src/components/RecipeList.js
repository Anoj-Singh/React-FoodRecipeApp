import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <ul className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={Math.random() * 1000}
              recipe={recipe}
              altProp="Error Occued"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
