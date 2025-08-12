import React from "react";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

function RecipeDetail() {
    const {id} = useParams();
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch("../data.json")
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(r => String(r.id) === id);
        setRecipeData(foundRecipe);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recipeData) {
    return <div className="text-white">loading</div>
  }
  return (
    <div className=" flex gap-6 grid-cols-2 bg-slate-800 items-center justify-center h-screen">
      
        <div  className="h-60 w-full grid grid-cols-1 gri sm:grid-cols-3 hover:bg-indigo-400  items-center bg-slate-300 rounded-xl shadow-md  text-center "
        >
          <img className="h-24 w-24" src={recipeData.image} alt={recipeData.title} />
          <h1 className="items-center text-purple-600 justify-center">
            {recipeData.title}
          </h1>
          <p className="font-semibold">{recipeData.summary}</p>
          <ul className="list-disc ml-6 mb-6">{recipeData.ingredients.map((item, idx) => ( <li key={idx}>{item}</li> ))}</ul>

          <h2 className="font-semibold text-2xl">Ingredients</h2>
          <ol>{recipeData.instructions.map((step, idx) => (
            <li key={idx} className="mb-2">{step}</li>
          ))}</ol>
        </div>
    
    </div>
  );
}

export default RecipeDetail;
