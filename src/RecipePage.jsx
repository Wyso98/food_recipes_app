import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDataForID} from "./API/API-metods.jsx";

export const RecipePage = () =>{
    const [recipeData, setRecipeData] = useState("")
    const {recipeID} = useParams()

    useEffect(() => {
        getDataForID(recipeID, setRecipeData)
    }, []);

    const showData = () =>{

    }

    return(
        (recipeData === "" ? <div className={"recipePage container"} style={{paddingTop: 20}}>Dane się ładują</div> :
            <div className={"container recipePage"}>
                <p>This recipe has {recipeData.calories.toFixed(0)} calories</p>
            </div>
        )
    )
}