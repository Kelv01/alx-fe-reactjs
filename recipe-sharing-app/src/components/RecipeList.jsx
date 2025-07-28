import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore  from "./recipeStore";

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description.slice(0, 100)}...</p>
          <Link to={`/recipe/${recipe.id}`} className="view-link">
            View Recipe →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
