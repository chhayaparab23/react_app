import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "354391d9";
  const APP_KEY = "70926e922a6acb330289c80515a6aed2";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.more);
      if (result.more == false) {
        return setAlert("No food with such name !");
      }
      setRecipes(result.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form !");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Recipe Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert}></Alert>}
        <input
          type="text"
          placeholder="Search Food"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Recipe key={recipe.recipe.label} recipe={recipe}></Recipe>
          ))}
      </div>
    </div>
  );
};

export default App;
