import React from "react";
import {InterestingFactsOnEntry} from "./InterestingFactsOnEntry.jsx";
import {Footer} from "./Footer.jsx";
import chefImage from "../public/chefImage.svg";


export const EntryPage = ()=>{

    return(
            <main className={"container container-background-entry"}>
                <div className={"entryPage"}>
                    <header className={"header"}>
                        <div className={"header_box"}>
                            <h2 className={"display-3 header_text"}>Hello flavor seeker. Look for recipes that will delight you and your guests. Happy hunting! </h2>
                            <img className={"header_image"} src={chefImage} alt={"chef-image"}/>
                        </div>
                    </header>
                    <InterestingFactsOnEntry/>
                    <Footer/>
                </div>
            </main>
    )
}