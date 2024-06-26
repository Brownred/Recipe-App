import "./App.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import { getFavoriteRecipes, searchRecipes, addFavouriteRecipe, removeFavouriteRecipe } from "./api";
import { Recipe } from "./types";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/recipeModal";

type Tabs = "search" | "favorites";

function App() {

  const [searchTerm, setSearchTerm] = useState<string>("fries");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedTab, setSelectedTab] = useState<Tabs>("search");
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  const pageNumber = useRef(1);

  useEffect(()=> {
    const fetchFavoriteRecipes = async () => {
      try {
        const favoriteRecipes = await getFavoriteRecipes();
        setFavoriteRecipes(favoriteRecipes.results);
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

  const removeFavoriteRecipe = async(recipe: Recipe) => {
    try {
      await removeFavouriteRecipe(recipe);
      const updateRecipes = favoriteRecipes.filter((favRecipe) => recipe.id !== favRecipe.id);
      setFavoriteRecipes(updateRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavoriteRecipe = async (recipe: Recipe) => {
    try {
      await addFavouriteRecipe(recipe);
      setFavoriteRecipes([...favoriteRecipes, recipe]);
    } catch (error) {
      console.log(error);
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

        {recipes.map((recipe) => {
          const isFavourite = favoriteRecipes.some((favRecipe)=> recipe.id === favRecipe.id);
        return(
          <RecipeCard recipe={recipe}
          onClick={() => setSelectedRecipe(recipe)}
          onFavBtnClick={isFavourite ? removeFavoriteRecipe : addFavoriteRecipe }
          isFavourite = {isFavourite}
          />
        );
        })}
        <button
          className="view-more-button"
          onClick={handleViewMoreCllick}>
          view more
        </button>
        </>)} 

      {selectedTab === "favorites" && (<>
        {favoriteRecipes.map((recipe)=> (
          <RecipeCard recipe={recipe}
          onClick={()=> setSelectedRecipe(recipe)}
          onFavBtnClick={removeFavoriteRecipe} 
          isFavourite={true}
          />
        ))}
      </>)}

        {selectedRecipe ? (
        <RecipeModal id={selectedRecipe.id} onClose={()=> setSelectedRecipe(null)}/>
        ) : null} 

      </div>
  )
}

export default App
