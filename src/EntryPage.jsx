import React from "react";
import {InterestingFactsOnEntry} from "./InterestingFactsOnEntry.jsx";


export const EntryPage = ()=>{

    return(
            <main className={"container container-background-entry"}>
                <div className={"entryPage"}>
                    <header className={"header"}>
                        <div className={"header_box"}>
                            <h2 className={"display-3 header_text"}>Hello flavor seeker. Look for recipes that will delight you and your guests. Happy hunting! </h2>
                            <img className={"header_image"} src={"../public/chefImage.svg"} alt={"chef-image"}/>
                        </div>
                    </header>
                    <InterestingFactsOnEntry/>
                </div>
            </main>
    )
}