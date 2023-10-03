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

  return (
          <HashRouter>
              <Navigation/>
              <div className={"pageBackground"}>
                  <Routes>
                      <Route path={"/"} element={<EntryPage/>}/>
                      <Route path={"/searchForRecipe"} element={<SearchPage arrayOfRecipes={arrayOfRecipes} setArrayOfRecipes={setArrayOfRecipes}/>}/>
                      <Route path={"/searchForRecipe/:recipeID"} element={<RecipePage/>}/>
                  </Routes>
              </div>
          </HashRouter>
  )
}

export default App
