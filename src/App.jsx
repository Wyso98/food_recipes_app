import {useEffect, useState} from 'react'
import {getData} from "./API/API-metods.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import {EntryPage} from "./EntryPage.jsx";
import {Navigation} from "./Navigation.jsx";
import {BrowserPage} from "./BrowserPage.jsx";

function App() {

    useEffect(() => {
        getData()
    }, []);

  return (
          <HashRouter>
              <Navigation/>
              <Routes>
                  <Route path={"/"} element={<EntryPage/>}/>
                  <Route path={"/searchForRecipe"} element={<BrowserPage/>}/>
              </Routes>
          </HashRouter>
  )
}

export default App
