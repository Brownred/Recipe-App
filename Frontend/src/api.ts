//  create a function that will create our api endpoint

import { Recipe } from "./types";

const searchRecipes = async (searchTerm: string, page: number) => {
    const baseUrl = new URL("http://localhost:4000/api/recipes/search");
    baseUrl.searchParams.append("searchTerm", searchTerm);
    baseUrl.searchParams.append("page", page.toString());

    const response = await fetch(baseUrl);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

const getRecipeSummary = async (id: string) => {
    const url = new URL(`http://localhost:4000/api/recipes/${id}/summary`);
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

const getFavoriteRecipes = async() => {
    const url = new URL(`http://localhost:4000/api/recipes/favourites`);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

const addFavouriteRecipe = async (recipe: Recipe) => {
    const url = new URL(`http://localhost:4000/api/recipes/favourites`);
    const body = {
        recipeId: recipe.id
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
};

const removeFavouriteRecipe = async (recipe: Recipe) => {
    const url = new URL(`http://localhost:4000/api/recipes/favourites`);
    const body = {
        recipeId: recipe.id
    }
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)

    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

export { searchRecipes, getRecipeSummary, getFavoriteRecipes, addFavouriteRecipe, removeFavouriteRecipe };