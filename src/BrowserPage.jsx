import React from "react";
import {RecipeElement} from "./RecipeElement.jsx";

export const BrowserPage = ({arrayOfRecipes}) =>{
    const makeUniqueID = ()=>{
        return Date.now() + Math.random().toString(36).substring(7);
    }
    const showRecipes = () =>{
        if(arrayOfRecipes.length === 0){
            return <p>Wait a second for your data</p>
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
                <form>

                </form>
                <div className={"recipes_box"}>
                    {showRecipes()}
                </div>
            </div>
        </main>
    )
}