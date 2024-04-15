// The bulk of our backend code will live here and its going to have the code to start the server and our app and handle the endpoints

import express from 'express'
import cors from 'cors'
import e from 'express';

// create a new express app
const app = express(); // this is the app that we will use to create our server. an analogy is that it is like a factory that creates a car

app.use(express.json()); // a convinience thing that helps us convert the body of the request and responses* that we make into json so that we dont have to do it manually on every request. an analogy is that it is like a translator that translates the language of the request and (*response) into json
app.use(cors()); // this is a middleware that allows us to make requests from our frontend to our backend. an analogy is that it is like a bouncer at a club that allows people in.

// an end point is like a door that you knock on to get a response.the function is like the person that opens the door when you knock on the door.the request is like the knock on the door
app.get("/api/recipes/search/", async (req, res) => {
    // the code that will handle the request and response will go here
    res.json({message: "Hello World!"});

}) // this is the endpoint that we will use to test that our server is working. an analogy is that it is like a test drive. the first parameter is a string: the end  point that this function is going to handle; an analogy is that it is like the address of a house. 
// the second parameter is a function that is going to handle the request and response. an analogy is that it is like the person that is going to open the door when you knock on the door. 

// before I git add, I should add a git ignore File, to ignore the modules