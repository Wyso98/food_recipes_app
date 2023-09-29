import {useEffect, useState} from 'react'
import {getData} from "./API/API-metods.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import {EntryPage} from "./EntryPage.jsx";
import {Navigation} from "./Navigation.jsx";
import {BrowserPage} from "./BrowserPage.jsx";

function App() {

    const [arrayOfRecipes, setArrayOfRecipes] = useState([]);

    useEffect(() => {
        getData(setArrayOfRecipes)
    }, []);

  return (
          <HashRouter>
              <Navigation/>
              <div className={"pageBackground"}>
                  <Routes>
                      <Route path={"/"} element={<EntryPage/>}/>
                      <Route path={"/searchForRecipe"} element={<BrowserPage arrayOfRecipes={arrayOfRecipes}/>}/>
                  </Routes>
              </div>
          </HashRouter>
  )
}

export default App
