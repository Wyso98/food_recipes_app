import {useEffect, useState} from 'react'
import {getData} from "./API/API-metods.jsx";

function App() {

    useEffect(() => {
        getData()
    }, []);

  return (
    <>
      <div>Hello TEST</div>
    </>
  )
}

export default App
