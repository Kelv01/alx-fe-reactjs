// src/components/SearchFilterPanel.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchFilterPanel = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setCookingTime = useRecipeStore(state => state.setCookingTime); // optional
  const cookingTime = useRecipeStore(state => state.cookingTime);       // optional

  return (
    <div className="search-filter-panel" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search by name or ingredient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', flex: 1 }}
      />

      {/* Optional filter: Cooking time */}
      <select value={cookingTime} onChange={(e) => setCookingTime(Number(e.target.value))}>
        <option value="">All Times</option>
        <option value="15">≤ 15 mins</option>
        <option value="30">≤ 30 mins</option>
        <option value="60">≤ 1 hour</option>
      </select>
    </div>
  );
};

export default SearchFilterPanel;
