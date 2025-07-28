import { create } from 'zustand';

 const useRecipeStore = create((set, get) => ({
  recipes: [],

  favorites: [],
  recommendations: [],

  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),

  filterRecipes: () => {
    const { searchTerm, recipes } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  toggleFavorite: (id) => {
    const { favorites } = get();
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((fid) => fid !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },

  generateRecommendations: () => {
    const { favorites, recipes } = get();

    // Example logic: recommend recipes that share a word in title/description with favorites
    const favRecipes = favorites
      .map((id) => recipes.find((r) => r.id === id))
      .filter(Boolean);

    const keywords = favRecipes.flatMap((r) =>
      r.title.toLowerCase().split(' ')
    );

    const recommended = recipes.filter((r) => {
      const titleWords = r.title.toLowerCase().split(' ');
      return (
        !favorites.includes(r.id) &&
        titleWords.some((word) => keywords.includes(word))
      );
    });

    set({ recommendations: recommended });
  },
}));
export default useRecipeStore;