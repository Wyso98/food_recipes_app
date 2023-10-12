import React, {useState} from "react";
import {getData} from "./API/API-metods.jsx";
import {healthOptions, dietOptions, cuisineOptions, dishTypeOptions, mealTypeOptions} from "./API/searchOptionsForForm.jsx";

export const Form = ({setArrayOfRecipes, setNextLink, setRecipeCountOfSearch}) =>{
    const [formHealthCheckboxes, setFormHealthCheckboxes] = useState([])
    const [formDietCheckboxes, setFormDietCheckboxes] = useState([])
    const [formCuisineRadio, setFormCuisineRadio] = useState("")
    const [formMealTypeRadio, setFormMealTypeRadio] = useState("")
    const [formDishTypeCheckboxes, setFormDishTypeCheckboxes] = useState([])
    const [formIngredientsMin, setFormIngredientsMin] =useState("")
    const [formIngredientsMax, setFormIngredientsMax] =useState("")
    const [showFormHealthWindow, setShowFormHealthWindow] = useState(false)
    const [showFormDietWindow, setShowFormDietWindow] = useState(false)
    const [showFormCuisineWindow, setShowFormCuisineWindow] = useState(false)
    const [showFormMealTypeRadio, setShowFormMealTypeRadio] = useState(false)
    const [showFormDishTypeWindow, setShowFormDishTypeWindow] = useState(false)
    const [showFormIngredientsWindow, setShowFormIngredientsWindow] = useState(false)
    const [formSearch, setFormSearch] = useState("")

    // function for text search input
    const searchForRecipeInput = (event)=>{
        setFormSearch(event.target.value)
    }
    // function for submit form
    const runBrowser = (event) =>{
        event.preventDefault()
        if(formIngredientsMin < 0 || formIngredientsMax < 0){
            alert("Values of MIN and MAX ingredients can't be negative");
            setFormIngredientsMin("");
            setFormIngredientsMax("");
        }else{
            getData(setRecipeCountOfSearch, setArrayOfRecipes, formSearch, formCuisineRadio, formMealTypeRadio , formIngredientsMin, formIngredientsMax, setNextLink, formHealthCheckboxes, formDietCheckboxes, formDishTypeCheckboxes)
        }
    }
    // function for changing arrays of checkboxes
    const changeCheckboxes = (arrayOfCheckboxes, settingFunction, event) =>{
        if(event.target.checked){
            settingFunction([...arrayOfCheckboxes, event.target.value])
        }else{
            settingFunction(arrayOfCheckboxes.filter(item => item !== event.target.value))
        }
    }
    // function for making element visible or invisible - changing true or false
    const handleToggleFormElementWindow = (settingFunction, stateData) => {
        settingFunction(!stateData);
    }
    // function for changing string input value
    const changeFormStringData = (settingFunction, event) =>{
        settingFunction(event.target.value)
    }
    // reset function
    const resetFunction = () =>{
        setFormSearch("");
        setFormHealthCheckboxes([]);
        setFormDietCheckboxes([]);
        setFormCuisineRadio("");
        setFormMealTypeRadio("");
        setFormDishTypeCheckboxes([]);
        setFormIngredientsMin("");
        setFormIngredientsMax("");
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
                    <h3 className={"search_form-heading"}
                        onClick={()=>handleToggleFormElementWindow(setShowFormDishTypeWindow, showFormDishTypeWindow)}>
                        Dish type{formDishTypeCheckboxes.length > 0 ? ` - ${formDishTypeCheckboxes.length} selected` : ""}
                    </h3>
                    {showFormDishTypeWindow &&
                        (<div className={"search_form-listOfCheckboxes"}>
                            {dishTypeOptions.map((item, index) => {
                                return(
                                    <div key={index*Math.random()}>
                                        <input id={item} key={index*Math.random()} value={item} type={"checkbox"}
                                               onChange={(event) =>changeCheckboxes(formDishTypeCheckboxes,setFormDishTypeCheckboxes,event)}
                                               checked={formDishTypeCheckboxes.includes(item)}/>
                                        <label htmlFor={item} key={index*Math.random()}>{item.replace(/%20/g, " ")}</label>
                                    </div>
                                )
                            })}
                        </div>)}
                </div>
                <div className={"search_form-box-element col-12 col-lg-4"}>
                    <h3 className={"search_form-heading"} onClick={()=>handleToggleFormElementWindow(setShowFormIngredientsWindow, showFormIngredientsWindow)}>Ingredients amount</h3>
                    {showFormIngredientsWindow ?
                        <div className={"search_form-ingredientsAmount"}>
                            <div className={"search_form-ingredientsAmountBox"}>
                                <label htmlFor={"MIN"} >MIN</label>
                                <input value={formIngredientsMin} id={"MIN"} className={"search_form-ingredients-inputNumber"} type={"number"}
                                onChange={(event)=>changeFormStringData(setFormIngredientsMin,event)}/>
                            </div>
                            <span> - </span>
                            <div className={"search_form-ingredientsAmountBox"}>
                                <label htmlFor={"MAX"}>MAX</label>
                                <input value={formIngredientsMax} id={"MAX"} className={"search_form-ingredients-inputNumber"} type={"number"}
                                onChange={(event)=>changeFormStringData(setFormIngredientsMax,event)}/>
                            </div>
                        </div>
                        : ""}
                </div>
                <div className={"form-buttons-box"}>
                    <button className={"search_form-button search_form-resetButton"} type={"button"} onClick={resetFunction}>Reset</button>
                    <button className={"search_form-button search_form-submitButton"} type={"submit"}>Search for recipes</button>
                </div>
            </div>
        </form>
    )
}