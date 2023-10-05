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
                <div className={"recipePage_infoBelow"}>
                    <div className={"recipePage_infoBelow-element"}>
                        <div className={"recipePage_infoBelow-imageBox"} >
                            <img className={"recipePage_infoBelow-icon"} src={"../public/user-regular.svg"} alt={"user icon"}/>
                            <img className={"recipePage_infoBelow-icon"} src={"../public/utensils-solid.svg"} alt={"utensils icon"}/>
                        </div>
                        <p>{recipeData.yield}</p>
                    </div>
                    {Number(recipeData.totalTime) !== 0 ?
                        <div className={"recipePage_infoBelow-element"}>
                            <img className={"recipePage_infoBelow-icon"} src={"../public/clock-regular.svg"} alt={"clock image"}/>
                            <p>{recipeData.totalTime}</p>
                         </div>
                        : ""
                    }
                    <div className={"recipePage_infoBelow-element"}>
                        <img className={"recipePage_infoBelow-icon"} src={"../public/burger-solid.svg"} alt={"burger image"}/>
                        <p>{recipeData.calories.toFixed(0)} calories</p>
                    </div>
                </div>
                <div className={"row recipePage_boxIngredientsAndHealth"}>
                    <ul className={"recipePage_ingredients col-12 col-lg-5"}>
                        <h3>Ingredients:</h3>
                        {recipeData.ingredients.map((item, index) =>{
                            return(
                                <li key={index}>
                                    {item.text}
                                    <img className={"recipePage_ingredients-image"} src={`${item.image}`} alt={"picture of ingredient"}/>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={"recipePage_health col-12 col-lg-5"}>
                        <div><h3>Health Labels:</h3> {recipeData.healthLabels.join(", ")}</div>
                        <a className={"recipePage_button"} target={"_blank"} href={recipeData.url}>Click to see recipe directions</a>
                    </div>
                </div>
            </div>
        )
    )
}