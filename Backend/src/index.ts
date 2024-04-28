// The bulk of our backend code will live here and its going to have the code to start the server and our app and handle the endpoints

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config() // this will read the .env file and make the key value pairs available as environment variables
import { searchRecipes, getRecipeSummary } from './recipe-api'


// create a new express app
const app = express(); // this is the app that we will use to create our server. an analogy is that it is like a factory that creates a car

app.use(express.json()); // a convinience thing that helps us convert the body of the request that we make into json so that we dont have to do it manually on every request. an analogy is that it is like a translator that translates the language of the request and into json
app.use(cors()); // this is a middleware that allows us to make requests from our frontend to our backend. an analogy is that it is like a bouncer at a club that allows people in.

app.get("/api/recipes/search/", async (req, res) => {
    // the code that will handle the request and response will go here

    // GET http://localhost:4000/api/recipes/search/?searchTerm=chicken&page=1
    const searchTerm = req.query.searchTerm as string; // this will get the search term from the query params of the request
    const page = parseInt(req.query.page as string); // this will get the page from the query params of the request
    const results = await searchRecipes(searchTerm, page); // this will call the searchRecipes function that we imported from the recipe-api file and pass in the search term and page that we got from the query params of the request.

    return res.json(results); // this will send the results back to the client as a json response

}) // this is the endpoint that we will use to test that our server is working. an analogy is that it is like a test drive. the first parameter is a string: the end  point that this function is going to handle; an analogy is that it is like the address of a house. 
// the second parameter is a function that is going to handle the request and response. an analogy is that it is like the person that is going to open the door when you knock on the door. 

app.get("/api/recipes/:id/summary", async (req, res) => {
    const recipeId = req.params.id as string;
    const results = await getRecipeSummary(recipeId);
    return res.json(results);
})

app.listen(4000, () => {
    console.log("Server is running on localhost:4000"); // this is the code that will run when the server/ code is succesfully started. 
}) // this is the code that will start the server.