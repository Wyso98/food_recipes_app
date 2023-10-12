import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export const Navigation = ()=>{
    const [showNavForHamburger, setShowNavForHamburger] = useState(false)

    return(
        <nav className="navigation-container">
            <div className="container navigation-box">
                <h2 className={"mainLogo"}>Recipe Library</h2>
                <div className={"nav-rightSide"}>
                    <NavLink className={({isActive}) => `nav_element ${isActive ? "active_element": undefined}`} end to={"/"}  >Home</NavLink>
                    <NavLink className={({isActive}) => `nav_element ${isActive ? "active_element": undefined}`} end to={"/searchForRecipe"}>Search engine</NavLink>
                </div>
                    <img onClick={()=>setShowNavForHamburger(!showNavForHamburger)} className={"nav-hamburger-image"} src={"../public/bars-solid.svg"} alt={"menu"}/>
                {showNavForHamburger ?
                    <div className={"nav-forHamburger"}>
                    <NavLink className={({isActive}) => `nav-forHamburger-element ${isActive ? "active_element": undefined}`} end to={"/"}  >Home</NavLink>
                    <NavLink className={({isActive}) => `nav-forHamburger-element ${isActive ? "active_element": undefined}`} end to={"/searchForRecipe"}>Search engine</NavLink>
                </div>
                : ""}
            </div>
        </nav>
    )
}