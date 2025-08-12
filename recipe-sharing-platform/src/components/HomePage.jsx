import React from "react";
import data from '../data.json'

import { useState, useEffect } from "react";

function HomePage() {
    const [recipeData, setRecipeData] = useState([])
    
    useEffect(() =>  {
       setRecipeData(data)

    },[])

  return <div className=" flex gap-6 grid-cols-2 bg-slate-800 items-center justify-center h-screen">
    {recipeData.map((recipe, idx) => (
         <div key={idx} className="h-60 w-full grid grid-cols-1 gri sm:grid-cols-3 hover:bg-indigo-400  items-center bg-slate-300 rounded-xl shadow-md  text-center ">
            <img className="h-24 w-24" src={recipe.image} alt={recipe.title} />
            <h1 className="items-center text-purple-600 justify-center">{recipe.title}</h1>
            <p className="">{recipe.summary}</p>
         </div>
    ))}

  </div>;
}

export default HomePage;
