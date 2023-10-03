import React from "react";
import {Link} from "react-router-dom";

export const RecipeElement = ({item, id}) =>{
    return(
        <Link to={`/searchForRecipe/${id}`} className={"recipe_element col-12 col-sm-6 col-md-4 col-lg-3"}>
            <img className={"recipe_image"} src={item.recipe.images.REGULAR.url}/>
            <div>
                <h3>{item.recipe.label}</h3>
                <p>Kitchen type: {item.recipe.cuisineType.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                <p>Type of diet: {item.recipe.dietLabels.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
                <p>Meal type: {item.recipe.mealType.map((item, index) => <span key={index}>{`${item} `}</span>)}</p>
            </div>
        </Link>
    )
}