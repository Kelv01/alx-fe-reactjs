// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; // assume you display each recipe this way

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes match your search.</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
