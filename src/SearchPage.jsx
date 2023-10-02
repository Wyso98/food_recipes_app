import React, {useState} from "react";
import {RecipeElement} from "./RecipeElement.jsx";
import {getData, getDataInfiniteScroll} from "./API/API-metods.jsx";
import InfiniteScroll from "react-infinite-scroller";

export const SearchPage = ({arrayOfRecipes, setArrayOfRecipes}) =>{
    const [formSearch, setFormSearch] = useState("")
    const [nextLink, setNextLink] = useState("")

    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }
    const runBrowser = (event) =>{
        event.preventDefault()
        getData(setArrayOfRecipes, formSearch, setNextLink)
    }
    const showRecipes = () =>{
        if(arrayOfRecipes.length === 0){
            return <p style={{fontSize: "1.4rem"}}>There you will see results of your search</p>
        }else{
            return (
                <InfiniteScroll
                    className={"recipes_box"}
                    pageStart={0}
                    loadMore={()=>getDataInfiniteScroll(nextLink, setArrayOfRecipes, setNextLink)}
                    hasMore={true}
                    loader={<div>Loading ...</div>}>
                    {arrayOfRecipes.map((item, index) =>{
                        const id = item.recipe.uri.split('#recipe')[1];
                    return <RecipeElement key={id} id={id} item={item}/>
                    })}
                </InfiniteScroll>
            )
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
                {showRecipes()}
            </div>
        </main>
    )
}