import React, {useState} from "react";
import {RecipeElement} from "./RecipeElement.jsx";
import {getDataForRandom, getDataInfiniteScroll} from "./API/API-metods.jsx";
import InfiniteScroll from "react-infinite-scroller";
import {Form} from "./Form.jsx";
import {Link} from "react-router-dom";

export const SearchPage = ({arrayOfRecipes, setArrayOfRecipes, randomRecipeData, setRandomRecipeData, nextLink, setNextLink, recipeCountOfSearch, setRecipeCountOfSearch}) =>{

    const loadRandomRecipe = () =>{
        getDataForRandom(setRandomRecipeData)
    }
    const getIdFromUri = (uriLink) =>{
        return uriLink.split("#recipe")[1]
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
                    hasMore={arrayOfRecipes.length <= recipeCountOfSearch}
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
                <Form setRecipeCountOfSearch={setRecipeCountOfSearch} setNextLink={setNextLink} setArrayOfRecipes={setArrayOfRecipes}/>
                <div className={"random_searcher-panel col-12"}>
                    <h2 className={"random_searcher-panel-heading"}>Search For Random recipe</h2>
                    <button className={"random_searcher-panel-button"} onClick={loadRandomRecipe}>Search for random</button>
                </div>
                {randomRecipeData ?  <div className={"random_searcher-box row"}>
                    <Link className={"col-12 col-xl-10 random_searcher-box-link"} to={`/searchForRecipe/${getIdFromUri(randomRecipeData.recipe.uri)}`}>
                        <h2 className={"random_searcher-boxHeading"}>{randomRecipeData.recipe.label}</h2>
                        <div className={"random_searcher-box-underHeading"}>
                            <div className={"random_searcher-left"}>
                                <img className={"random_searcher-recipe-image"} src={randomRecipeData.recipe.images.REGULAR.url}/>
                            </div>
                            <div className={"random_searcher-right"}>
                                <p className={"random_searcher-right-element"}>Kitchen type: {randomRecipeData.recipe.cuisineType.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                                <p className={"random_searcher-right-element"}>Type of diet: {randomRecipeData.recipe.dietLabels.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                                <p className={"random_searcher-right-element"}>Meal type: {randomRecipeData.recipe.mealType.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                                <p className={"random_searcher-right-element"}>Dish Type: {randomRecipeData.recipe.dishType.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                            </div>
                        </div>
                    </Link>
                </div> : ""}
                {showRecipes()}
            </div>
        </main>
    )
}