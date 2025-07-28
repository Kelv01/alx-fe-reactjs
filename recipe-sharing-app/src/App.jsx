import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail"; // assuming this exists

function App() {
  const { filterRecipes, searchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>🍽️ Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
