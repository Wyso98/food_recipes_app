import React, {useState} from "react";
import {getData} from "./API/API-metods.jsx";

export const Form = ({setArrayOfRecipes, setNextLink}) =>{
    const [formHealthCheckboxes, setFormHealthCheckboxes] = useState([])
    const [formDietCheckboxes, setFormDietCheckboxes] = useState([])
    const [showFormHealthWindow, setShowFormHealthWindow] = useState(false)
    const [showFormDietWindow, setShowFormDietWindow] = useState(false)
    const [formSearch, setFormSearch] = useState("")

    // funkca dla wyszukiwarki tekstowej
    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }
    // funkcja uruchamiająca cały formularz
    const runBrowser = (event) =>{
        event.preventDefault()
        getData(setArrayOfRecipes, formSearch, setNextLink, formHealthCheckboxes, formDietCheckboxes)
    }
    // ogólna funkcja zmieniająca array checkboxów
    const changeCheckboxes = (arrayOfCheckboxes, settingFunction, event) =>{
        if(event.target.checked){
            settingFunction([...arrayOfCheckboxes, event.target.value])
        }else{
            settingFunction(arrayOfCheckboxes.filter(item => item !== event.target.value))
        }
    }
    // funkcja zmieniająca state na true false pozwalazjąca pokazać lub ukryć element
    const handleToggleFormElementWindow = (settingFunction, stateData) => {
        settingFunction(!stateData);
    }

    const healthOptions = ["alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free",
        "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free",
        "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "low-fat-abs", "pork-free", "read-meat-free", "sehellfish-free", "sesame-free", "soy-free",
        "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"];

    const dietOption = ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"];

    return(
        <form className={"search_form row"} onSubmit={runBrowser}>
            <input className={"search_input_text col-12"} type={"text"} id={"search_input_text"} placeholder={"Search..."} value={formSearch}
                   onChange={(event) => searchForRecipeInput(event)}/>
            <div className={"search_form-box row"}>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"}
                        onClick={()=>handleToggleFormElementWindow(setShowFormHealthWindow, showFormHealthWindow)}>
                        Choose Health Label{formHealthCheckboxes.length > 0 ? ` - ${formHealthCheckboxes.length} selected` : ""}
                    </h3>
                    {showFormHealthWindow &&
                        (<div className={"search_form-listOfCheckboxes"}>
                        {healthOptions.map((item, index) => {
                            return(
                                <div key={index*Math.random()}>
                                    <input id={item} key={index*Math.random()} value={item} type={"checkbox"}
                                           onChange={(event) =>changeCheckboxes(formHealthCheckboxes,setFormHealthCheckboxes,event)}
                                           checked={formHealthCheckboxes.includes(item)}/>
                                    <label htmlFor={item} key={index*Math.random()}>{item.replace(/-/g, " ")}</label>
                                </div>
                                )
                             })}
                        </div>)}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"} onClick={()=> handleToggleFormElementWindow(setShowFormDietWindow, showFormDietWindow)}>
                        Diet type {formDietCheckboxes.length > 0 ?`- ${formDietCheckboxes.length} selected` : ""}</h3>
                    {showFormDietWindow &&
                        <div className={"search_form-listOfCheckboxes"}>
                            {dietOption.map((item, index)=>{
                                return (
                                    <div key={index*Math.random()}>
                                        <input key={index*Math.random()} id={item} value={item} type={"checkbox"}
                                        onChange={event => changeCheckboxes(formDietCheckboxes, setFormDietCheckboxes, event)}
                                        checked={formDietCheckboxes.includes(item)}/>
                                        <label htmlFor={item} key={index*Math.random()}>{item.replace(/-/g, " ")}</label>
                                    </div>
                                )
                            })}
                        </div>}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"}>22</h3>
                    <div></div>
                </div>
                <button type={"submit"}>Search for recipes</button>
            </div>
        </form>
    )
}