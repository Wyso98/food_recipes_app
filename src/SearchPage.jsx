import React, {useState} from "react";
import {RecipeElement} from "./RecipeElement.jsx";
import {getData, getDataInfiniteScroll} from "./API/API-metods.jsx";
import InfiniteScroll from "react-infinite-scroller";
import {Form} from "./Form.jsx";

export const SearchPage = ({arrayOfRecipes, setArrayOfRecipes}) =>{
    const [nextLink, setNextLink] = useState("")

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
                    loader={
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>}>
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
                <Form setNextLink={setNextLink} setArrayOfRecipes={setArrayOfRecipes}/>
                {showRecipes()}
            </div>
        </main>
    )
}