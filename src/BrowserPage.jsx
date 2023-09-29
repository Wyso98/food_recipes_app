import React from "react";
import {RecipeElement} from "./RecipeElement.jsx";

export const BrowserPage = ({arrayOfRecipes, formSearch, searchForRecipeInput, runBrowser, message}) =>{
    const makeUniqueID = ()=>{
        return Date.now() + Math.random().toString(36).substring(7);
    }
    const showRecipes = () =>{
        if(arrayOfRecipes.length === 0){
            return <p style={{fontSize: "1.4rem"}}>{message}</p>
        }else{
            console.log(arrayOfRecipes)
            return arrayOfRecipes.map(item =>{
                const uniqueID = makeUniqueID()
                return <RecipeElement key={uniqueID} id={uniqueID} item={item}/>
            })
        }
    }
    return(
        <main className={"container container-background-browser"}>
            <div className={"browser"}>
                <form className={"search_form"} onSubmit={runBrowser}>
                    <label className={"heading_search_input_text"} htmlFor={"search_input_text"}>Write a recipe ingredient</label><br/>
                    <input className={"search_input_text"} type={"text"} id={"search_input_text"} value={formSearch} onChange={(event) => searchForRecipeInput(event)}/>
                    <button type={"submit"}>Search for recipes</button>
                </form>
                <div className={"recipes_box"}>
                    {showRecipes()}
                </div>
            </div>
        </main>
    )
}