import {basicURL, API_KEY, API_ID} from "./API-values.jsx";
import {compile} from "sass";

export const getData = (settingFunction, query = "", cuisine, nextLinkSetting, healthArrayOfCheckboxes = [], dietArrayCheckboxes = []) =>{

    const formOptionsSearch = (arrayOfCheckboxes, searchParam) =>{
        let linkString = "";
        arrayOfCheckboxes.forEach(item => {
            linkString = linkString.concat(`&${searchParam}=${item}`)
        })
        return linkString
    }

    const searchParams = new URLSearchParams({
        app_id: API_ID,
        app_key: API_KEY,
        type: "public",
        q: query,
    })
     if(cuisine !== ""){
         searchParams.append("cuisineType", cuisine)
     }

    fetch(`${basicURL}?${searchParams.toString()}${formOptionsSearch(healthArrayOfCheckboxes, "health")}${formOptionsSearch(dietArrayCheckboxes, "diet")}`,{
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.hits)
            settingFunction(data.hits);
            nextLinkSetting(data._links.next.href)
            console.log(data._links.next.href)
        })

        .catch(error => console.log(error))
}

export const getDataInfiniteScroll = (link, settingFunction, nextLinkSetting) =>{

    let test = []

    fetch(link, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
                settingFunction(prevState => [...prevState, ...data.hits])
                nextLinkSetting(data._links.next.href)
            }
        )
}

export const getDataForID = (id, settingProductData) => {

    const searchParams = new URLSearchParams({
        app_id: API_ID,
        app_key: API_KEY,
        type: "public",
    })

    fetch(`https://api.edamam.com/api/recipes/v2/${id}?${searchParams.toString()}`, {
        method: "GET",
    })
        .then(response => response.json())
        .then(data => {
            settingProductData(data.recipe)
            console.log(data.recipe)
        })
        .catch(error => console.log(error))
}