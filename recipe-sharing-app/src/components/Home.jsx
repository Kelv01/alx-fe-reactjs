// components/Home.jsx or RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore';

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
