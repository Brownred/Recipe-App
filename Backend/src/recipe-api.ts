
/**
 * Searches for recipes based on the provided search term and page number.
 * @param searchTerm - The term to search for recipes.
 * @param page - The page number of the search results.
 * @returns A Promise that resolves to the search results in JSON format.
 * @throws An error if the API key is not found.
 */

const apiKey = process.env.API_KEY;

const searchRecipes = async (searchTerm: string, page: number) => {
        
    if (!apiKey) {
        throw new Error('API key not found');
    }

    const url = new URL('https://api.spoonacular.com/recipes/complexSearch'); // create a new url object that will help make things like parameters easier
    // now create the query params like api keys, search terms, etc

    const queryParams = {
        apiKey: apiKey,
        query: searchTerm,
        number: "10", // howmany messages we want to get per request
        offset: (page * 10).toString(), // this is how we can get the next page of 
    };
    url.search = new URLSearchParams(queryParams).toString(); // this will convert the query params into a string that can be appended to the url

    try {
        const searchResponse = await fetch(url);
        const resultJson = await searchResponse.json();
        return resultJson;
    } catch (error) {
        console.error('Error fetching recipes', error);
        return null;
    }
};

const getRecipeSummary = async (id: string) => {
    
    if (!apiKey) {
        throw new Error('API key not found');
    }

    const url = new URL(`https://api.spoonacular.com/recipes/${id}/summary`);
    const params = {
        apiKey: apiKey
    };
    url.search = new URLSearchParams(params).toString();
    
    const response = await fetch(url);
    const json = await response.json(); 
    return json;
};

export { searchRecipes, getRecipeSummary };

