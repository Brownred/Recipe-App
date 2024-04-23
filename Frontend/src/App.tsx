import "./App.css";
import { FormEvent, useState } from "react";
import searchRecipes from "./api";
import { Recipe } from "./types";


function App() {

  const [searchTerm, setSearchTerm] = useState<string>("fries");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);
    } catch(e) {
      console.log(e);
    }
  };

  return (
      <div className="">
        <form action="" onSubmit={(event)=> handleSearchSubmit(event)}>
          <input type="text"
          required
          placeholder="Enter a cerch term ..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
           />
          <button type="submit">
            Submit
          </button>
        </form>
        
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            recipes image location: {recipe.image}
            recipes title: {recipe.title}
          </div>
        ))}
      </div>
  )
}

export default App
