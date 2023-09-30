import React from "react";
import {useEffect, useState} from 'react'
import {getData} from "./API/API-metods.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import {EntryPage} from "./EntryPage.jsx";
import {Navigation} from "./Navigation.jsx";
import {BrowserPage} from "./BrowserPage.jsx";
import InfiniteScroll from "react-infinite-scroller";

function App() {

    const [arrayOfRecipes, setArrayOfRecipes] = useState([]);
    const [formSearch, setFormSearch] = useState("")
    const [message, setMessage] = useState("There you will se results of your search")
    const [nextLink, setNextLink] = useState("")

    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }

    const runBrowser = (event) =>{
        event.preventDefault()
        setMessage("Wait for your data")
        getData(setArrayOfRecipes, formSearch, setNextLink)
    }

  return (
          <HashRouter>
              <Navigation/>
              <div className={"pageBackground"}>
                  <Routes>
                      <Route path={"/"} element={<EntryPage/>}/>
                      <Route path={"/searchForRecipe"} element={<BrowserPage arrayOfRecipes={arrayOfRecipes} formSearch={formSearch} message={message} searchForRecipeInput={searchForRecipeInput} runBrowser={runBrowser}/>}/>
                  </Routes>
              </div>
          </HashRouter>
  )
}

export default App
