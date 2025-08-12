import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";

function HomePage() {
    const [recipeData, setRecipeData] = useState([]);
   
     useEffect(() => {
       fetch("../data.json")
         .then(response =>response.json())
         .then(data => setRecipeData(data))
         .catch((error) => console.error("Error fetching data:", error));
     }, []);

   return (
    <div className="flex gap-6 flex-wrap bg-slate-800 items-center justify-center h-screen">
      {recipeData.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          className="h-60 w-60 hover:bg-indigo-400 items-center bg-slate-300 rounded-xl shadow-md text-center"
        >
          <img className="h-24 w-24 mx-auto mt-4" src={recipe.image} alt={recipe.title} />
          <h1 className="text-purple-600 mt-2">{recipe.title}</h1>
          <p className="px-2">{recipe.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
