import React from "react";
import {useEffect, useState} from 'react'
import {HashRouter, Route, Routes} from "react-router-dom";
import {EntryPage} from "./EntryPage.jsx";
import {Navigation} from "./Navigation.jsx";
import {SearchPage} from "./SearchPage.jsx";
import {RecipeElement} from "./RecipeElement.jsx";
import {RecipePage} from "./RecipePage.jsx";

function App() {
    const [arrayOfRecipes, setArrayOfRecipes] = useState([]);
    const [randomRecipeData, setRandomRecipeData] = useState(false)
    const [nextLink, setNextLink] = useState("")
    const [recipeCountOfSearch, setRecipeCountOfSearch] = useState()

    return (
          <HashRouter>
              <Navigation/>
              <div className={"pageBackground"}>
                  <Routes>
                      <Route path={"/"} element={<EntryPage/>}/>
                      <Route path={"/searchForRecipe"} element={<SearchPage recipeCountOfSearch={recipeCountOfSearch} setRecipeCountOfSearch={setRecipeCountOfSearch} arrayOfRecipes={arrayOfRecipes}
                              setArrayOfRecipes={setArrayOfRecipes} randomRecipeData={randomRecipeData} setRandomRecipeData={setRandomRecipeData} nextLink={nextLink} setNextLink={setNextLink}/>}/>
                      <Route path={"/searchForRecipe/:recipeID"} element={<RecipePage/>}/>
                  </Routes>
              </div>
          </HashRouter>
  )
}

export default App
