import {basicURL, API_KEY, API_ID} from "./API-values.jsx";

export const getData = (settingFunction) =>{
    fetch(`${basicURL}?${API_ID}&${API_KEY}&type=public&q=chicken`,{
        method: "GET"
    })
    .then(response => response.json())
    .then(data => settingFunction(data.hits))
    .then(data => console.log(data))
    .catch(error => console.log(error))
}