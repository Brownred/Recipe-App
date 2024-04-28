import "./App.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import { searchRecipes } from "./api";
import { Recipe } from "./types";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/recipeModal";

type Tabs = "search" | "favorites";

function App() {

  const [searchTerm, setSearchTerm] = useState<string>("fries");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedTab, setSelectedTab] = useState<Tabs>("search");

  const pageNumber = useRef(1);

  useEffect(()=> {
    const fetchFavoriteRecipes = async () => {
      try {
        const favoriteRecipes = await getFavoriteRecipes();
      } catch(e) {
        console.log(e);
      }
    };

    fetchFavoriteRecipes();
  }, [])

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);
      pageNumber.current = 1;
    } catch(e) {
      console.log(e);
    }
  };

  const handleViewMoreCllick = async () => {
    const nextPage = pageNumber.current += 1;
    try {
      const nextRecipes = await searchRecipes(searchTerm, nextPage);
      setRecipes([...recipes, ...nextRecipes.results]);
      pageNumber.current = nextPage;
    } catch(e) {
      console.log(e);
    }
  };

  return (
      <div className="">
        <div className="tabs">
        <h1 onClick={()=> setSelectedTab("search")}>Recipe Search</h1>
        <h1 onClick={()=> setSelectedTab("favorites")}>Favourites</h1>
        </div>

        {selectedTab === "search" && (<>
        <form action="" onSubmit={(event) => handleSearchSubmit(event)}>
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
          <RecipeCard recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
        ))}
        <button
          className="view-more-button"
          onClick={handleViewMoreCllick}>
          view more
        </button>
        </>)} 

      {selectedTab === "favorites" && (<>
        <h1>Favourites</h1>
        <p>Coming soon...</p>
      </>)}

        {selectedRecipe ? (
        <RecipeModal id={selectedRecipe.id} onClose={()=> setSelectedRecipe(null)}/>
        ) : null} 

      </div>
  )
}

export default App
