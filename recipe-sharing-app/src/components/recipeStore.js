// src/components/recipeStore.js
import { create } from 'zustand';

 const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: '1',
      title: 'Ugali & Sukuma',
      description: 'Kenyan dish with maize flour and greens.',
    },
    {
      id: '2',
      title: 'Chapati',
      description: 'Flatbread made with wheat flour.',
    },
  ],

  // ✅ Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // ✅ Update existing recipe by ID
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),

  // ✅ Delete recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
export default useRecipeStore;