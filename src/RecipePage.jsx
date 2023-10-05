import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDataForID} from "./API/API-metods.jsx";

export const RecipePage = () =>{
    const [recipeData, setRecipeData] = useState("")
    const {recipeID} = useParams()

    useEffect(() => {
        getDataForID(recipeID, setRecipeData)
    }, []);

    return(
        (recipeData === "" ? <div className={"recipePage container"} style={{paddingTop: 20}}>Dane się ładują</div> :
            <div className={"container recipePage"}>
                <h2 className={"recipePage_heading col-12"}>{recipeData.label}</h2>
                <div className={"recipePage_mainInfo row"}>
                    <img className={"imageOfMeal col-12 col-sm-6 col-md-5"} src={recipeData.images.REGULAR.url} alt={"image of meal"}/>
                    <div className={"recipePage_mainInfo-background col-12 col-sm-6 col-md-5"}>
                        <div className={"recipePage_mainInfo-element"}>
                            Meal type: {recipeData.mealType.map((item, index) => <span key={index}>{`${item} `}</span>)}
                        </div>
                        <div className={"recipePage_mainInfo-element"}>
                             Dish type: {recipeData.dishType.map((item, index) => <span key={index}>{`${item} `}</span>)}
                        </div>
                        <div className={"recipePage_mainInfo-element"}>
                            Diet type: {recipeData.dietLabels.map((item, index) => <span key={index}>{`${item} `}</span>)}
                        </div>
                        <div className={"recipePage_mainInfo-element"}>
                            Cuisine Type: {recipeData.cuisineType.map((item, index) => <span key={index}>{`${item} `}</span>)}
                        </div>
                    </div>
                </div>

                <ul className={"col-12"}>

                </ul>
                <a className={"recipePage_button"} href={recipeData.url}>Click to see recipe directions</a>
            </div>
        )
    )
}