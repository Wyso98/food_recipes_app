import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import bars from "../public/bars-solid.svg";

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
                    <img onClick={()=>setShowNavForHamburger(!showNavForHamburger)} className={"nav-hamburger-image"} src={bars} alt={"menu"}/>
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