# Recipe App

## Overview
This project is a robust Recipe App that leverages the Spoonacular API for recipe data, combining React for the frontend, Node.js for the backend, and PostgreSQL via elephantSQL managed by Prisma. It provides users with a platform to discover, manage, and share recipes efficiently.

## Author
Lenox Miheso

## Learning Experience
Throughout the development of this project, I gained valuable experience in various aspects of web development, particularly focusing on RESTful APIs, including:
- Setting up a React frontend with interactive components.
- Building a scalable backend using Node.js and Express.
- Utilizing PostgreSQL via elephantSQL and managing it with Prisma for reliable data storage and retrieval.
- Implementing CRUD (Create, Read, Update, Delete) operations for managing recipe data.
- Implementing JWT Authentication for secure user authentication.
- Designing RESTful APIs for seamless communication between frontend and backend.
- Leveraging the Spoonacular API for fetching recipe data dynamically.
- Utilizing nodemon for automatic server restarts during development.

## Technologies & Tools Used
- **React**: Used for building the frontend user interface with interactive components.
- **Node.js & Express.js**: Employed for developing the backend server and handling server-side logic.
- **PostgreSQL Database (elephantSQL)**: Utilized as the primary database management system, managed via elephantSQL for seamless deployment and management.
- **Prisma**: Utilized as an ORM tool for simplifying database interactions and queries.
- **JWT Authentication**: Implemented for secure user authentication and authorization.
- **RESTful API Design**: Designed APIs following the REST principles for efficient communication between frontend and backend.
- **Spoonacular API**: Leveraged for fetching recipe data dynamically.
- **nodemon**: Employed for automatic server restarts during development, enhancing development efficiency.

## Database Setup
To set up the database:
1. Ensure you have an account with elephantSQL and obtain connection details.
2. Create a `.env` file in the backend directory and configure environment variables:
   ```
   DATABASE_URL=<your elephantSQL database URL>
   ```

## Backend Setup
To set up the backend:
1. Navigate to the project directory.
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Run the database migrations using Prisma CLI:
   ```
   npx prisma migrate dev
   ```
4. Start the backend server by running:
   ```
   npm start
   ```
   or for development with nodemon:
   ```
   npm run dev
   ```

## Frontend Setup
To set up the frontend:
1. Navigate to the project directory.
2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
3. Start the React development server using:
   ```
   npm start
   ```
4. Access the application in your web browser at `http://localhost:3000`.

## Spoonacular API Key Setup
To set up the Spoonacular API key:
1. Obtain an API key from Spoonacular.
2. Create a `.env` file in the backend directory and configure environment variables:
   ```
   SPOONACULAR_API_KEY=<your Spoonacular API key>
   ```

## Contribution
Contributions to this project are welcome. Feel free to submit bug fixes, feature enhancements, or suggestions via pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
I would like to express my gratitude to God.