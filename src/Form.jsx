import React, {useState} from "react";
import {getData} from "./API/API-metods.jsx";

export const Form = ({setArrayOfRecipes, setNextLink}) =>{
    const [formHealthCheckboxes, setFormHealthCheckboxes] = useState([])
    const [showFormHealthWindow, setShowFormHealthWindow] = useState(false)
    const [formSearch, setFormSearch] = useState("")

    // funkca dla wyszukiwarki tekstowej
    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }
    // funkcja uruchamiająca cały formularz
    const runBrowser = (event) =>{
        event.preventDefault()
        getData(setArrayOfRecipes, formSearch, setNextLink, formHealthCheckboxes)
    }
    // ogólna funkcja zmieniająca array checkboxów
    const changeCheckboxes = (arrayOfCheckboxes, settingFunction, event) =>{
        if(event.target.checked){
            settingFunction([...arrayOfCheckboxes, event.target.value])
        }else{
            settingFunction(arrayOfCheckboxes.filter(item => item !== event.target.value))
        }
    }
    const handleToggleFormHealthWindow = () => {
        setShowFormHealthWindow(!showFormHealthWindow);
    }

    const healthOptions = ["alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free",
        "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free",
        "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "low-fat-abs", "pork-free", "read-meat-free", "sehellfish-free", "sesame-free", "soy-free",
        "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"]

    return(
        <form className={"search_form row"} onSubmit={runBrowser}>
            <input className={"search_input_text col-12"} type={"text"} id={"search_input_text"} placeholder={"Search..."} value={formSearch}
                   onChange={(event) => searchForRecipeInput(event)}/>
            <div className={"search_form-box"}>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"} onClick={handleToggleFormHealthWindow}>Choose Health Label{formHealthCheckboxes.length > 0 ? ` - ${formHealthCheckboxes.length} selected` : ""}</h3>
                    {showFormHealthWindow &&
                        (<div className={"search_form-listOfCheckboxes"}>
                        {healthOptions.map((item, index) => {
                            return(
                                <div>
                                    <input id={item} value={item} type={"checkbox"}
                                           onChange={(event) =>changeCheckboxes(formHealthCheckboxes,setFormHealthCheckboxes,event)}
                                           checked={formHealthCheckboxes.includes(item)}/>
                                    <label htmlFor={item}>{item.replace(/-/g, " ")}</label>
                                </div>
                                )
                             })}
                        </div>)}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3></h3>
                    <div></div>
                </div>
                <button type={"submit"}>Search for recipes</button>
            </div>
        </form>
    )
}