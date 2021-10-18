import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";
import { SyncLoader } from "react-spinners";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const YOUR_APP_ID = "0efe5fd3";
  const YOUR_APP_KEY = "ac520d7d4b2c8d3bd001b58a1a75fedd";
  const url = `https://api.edamam.com/search?q=${inputText}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free&from=0&to=30`;

  async function getRecipes(e) {
    e.preventDefault();
    setIsLoading(true);
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    setIsLoading(false);
    setInputText("");
  }

  return (
    <div className="container">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setRecipes={setRecipes}
        onSubmit={getRecipes}
      />
      {isLoading ? (
        <SyncLoader color="white" size={48} />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};

export default App;
