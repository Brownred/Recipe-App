import "./App.css";
import { useState } from "react";




function App() {

  const [searchTerm, setSearchTerm] = useState("fries");
  const [recipes, setRecipes] = useState([]);

  const handleSearchSubmit = async () => {
    
  }

  return (
    <>
      <h1>Recipe App</h1>
    </>
  )
}

export default App
