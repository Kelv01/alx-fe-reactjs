import React from "react";
import data from '../data.json'

import { useState, useEffect } from "react";

function HomePage() {
    const [recipeData, setRecipeData] = useState([])
    
    useEffect(() =>  {
       setRecipeData(data)

    },[])

  return <div className=" flex  gap-6 bg-slate-800 items-center justify-center h-screen">
    {recipeData.map((recipe, idx) => (
         <div key={idx} className="hover:bg-indigo-400  items-center bg-slate-300 rounded-xl shadow-md h-96 text-center">
            <h1 className="items-center text-purple-600 justify-center">{recipe.title}</h1>
            <p>{recipe.summary}</p>
            <img src={recipe.image} alt={recipe.title} />
         </div>
    ))}

  </div>;
}

export default HomePage;
