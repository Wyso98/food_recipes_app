import {basicURL, API_KEY, API_ID} from "./API-values.jsx";

export const getData = (settingFunction, query = "",) =>{

    const searchParams = new URLSearchParams({
        app_id: API_ID,
        app_key: API_KEY,
        type: "public",
        q: query
    })

    console.log(searchParams.toString())

    fetch(`${basicURL}?${searchParams.toString()}`,{
        method: "GET"
    })
    .then(response => response.json())
    .then(data => settingFunction(data.hits))
    .then(data => console.log(data))
    .catch(error => console.log(error))
}