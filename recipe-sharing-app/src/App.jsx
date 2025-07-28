import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecommendationsList from "./components/RecommendationsList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";

function App() {
  const { filterRecipes, searchTerm } = useRecipeStore();

  React.useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <BrowserRouter>
      <div
        className="app-container"
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        <h1>🍽️ Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        <RecommendationsList />
        <FavoritesList />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
