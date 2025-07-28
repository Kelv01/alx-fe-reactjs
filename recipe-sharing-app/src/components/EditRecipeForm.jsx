// src/components/EditRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent page reload

    updateRecipe(recipeId, { title, description });
    alert("Recipe updated!");
    // Optional: Navigate or reset form
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
