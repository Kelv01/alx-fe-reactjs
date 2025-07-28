// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: state.searchTerm
        ? recipes.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : recipes,
    })),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));
export default useRecipeStore;