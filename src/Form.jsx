import React, {useState} from "react";
import {getData} from "./API/API-metods.jsx";
import {healthOptions, dietOptions, cuisineOptions, dishTypeOptions, mealTypeOptions} from "./API/searchOptionsForForm.jsx";

export const Form = ({setArrayOfRecipes, setNextLink}) =>{
    const [formHealthCheckboxes, setFormHealthCheckboxes] = useState([])
    const [formDietCheckboxes, setFormDietCheckboxes] = useState([])
    const [formCuisineRadio, setFormCuisineRadio] = useState("")
    const [formMealTypeRadio, setFormMealTypeRadio] = useState("")
    const [showFormHealthWindow, setShowFormHealthWindow] = useState(false)
    const [showFormDietWindow, setShowFormDietWindow] = useState(false)
    const [showFormCuisineWindow, setShowFormCuisineWindow] = useState(false)
    const [showFormMealTypeRadio, setShowFormMealTypeRadio] = useState(false)
    const [formSearch, setFormSearch] = useState("")

    // funkca dla wyszukiwarki tekstowej
    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }
    // funkcja uruchamiająca cały formularz
    const runBrowser = (event) =>{
        event.preventDefault()
        getData(setArrayOfRecipes, formSearch, formCuisineRadio, formMealTypeRadio , setNextLink, formHealthCheckboxes, formDietCheckboxes)
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
    const changeFormStringData = (settingFunction, event) =>{
        settingFunction(event.target.value)
    }


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
                            {dietOptions.map((item, index)=>{
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
                    <h3 className={"search_form-heading"} onClick={()=>handleToggleFormElementWindow(setShowFormCuisineWindow, showFormCuisineWindow)}>
                        Cuisine options {formCuisineRadio ? "- Cuisine selected" : ""}</h3>
                    {showFormCuisineWindow ?
                        <div className={"search_form-listOfRadios"}>
                            <div key={Math.random()}>
                                <input id={"noneCuisine"} type={"radio"} value={""} name={"cuisineOptions"}
                                       onChange={(event)=> changeFormStringData(setFormCuisineRadio,event)}
                                       checked={formCuisineRadio === ""}/>
                                <label htmlFor={"noneCuisine"}>None</label>
                            </div>
                            {cuisineOptions.map((item, index)=>{
                                return(
                                    <div key={Math.random()}>
                                        <input id={item} type={"radio"} value={item} name={"cuisineOptions"} key={Math.random()}
                                               onChange={(event)=> changeFormStringData(setFormCuisineRadio,event)}
                                               checked={formCuisineRadio === item}/>
                                        <label key={Math.random()} htmlFor={item}>{item.replace(/%20/g, " ")}</label>
                                    </div>
                                )
                            })}
                        </div>
                        : ""}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"} onClick={()=>handleToggleFormElementWindow(setShowFormMealTypeRadio, showFormMealTypeRadio)}>
                        Meal Type {formMealTypeRadio ? "- Meal type selected" : ""}</h3>
                    {showFormMealTypeRadio ?
                        <div className={"search_form-listOfRadios"}>
                            <div key={Math.random()}>
                                <input id={"noneMealType"} type={"radio"} value={""} name={"MealTypeOptions"}
                                       onChange={(event)=> changeFormStringData(setFormMealTypeRadio,event)}
                                       checked={formMealTypeRadio === ""}/>
                                <label htmlFor={"noneMealType"}>None</label>
                            </div>
                            {mealTypeOptions.map((item, index)=>{
                                return(
                                    <div key={Math.random()}>
                                        <input id={item} type={"radio"} value={item} name={"MealTypeOptions"} key={Math.random()}
                                               onChange={(event)=> changeFormStringData(setFormMealTypeRadio,event)}
                                               checked={formMealTypeRadio === item}/>
                                        <label key={Math.random()} htmlFor={item}>{item.replace(/-/g, " ")}</label>
                                    </div>
                                )
                            })}
                        </div>
                        : ""}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"}>next</h3>
                    <div></div>
                </div>
                <button className={"search_form-submitButton"} type={"submit"}>Search for recipes</button>
            </div>
        </form>
    )
}