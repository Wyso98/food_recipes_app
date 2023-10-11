import React from "react";
import {useState} from "react";

export const Footer = () =>{
    const [newsletterValue, setNewsletterValue] = useState("")

    return(
        <div className={"footer-bg"}>
            <div className={"footer-container"}>
                <div className={"footer-up"}>
                    <div className={"footer-left"}>
                        <h4 className={"footer-left-heading"}>Fallow us</h4>
                        <div>
                            <img src="../public/facebook.svg" alt={"facebook-icon"} className={"footer-icon"} />
                            <img src='../public/square-twitter.svg' alt={"twitter-icon"} className={"footer-icon"} />
                            <img src="../public/square-instagram.svg" alt={"instagram"} className={"footer-icon"} />
                            <img src="../public/youtube.svg" alt={"youtube"} className={"footer-icon"} />
                        </div>
                    </div>
                    <form className={"footer-right"}>
                        <label className={"newsletter-heading"} htmlFor={"newsletter"}>Newsletter</label>
                        <input className={"newsletter-input"} value={newsletterValue} type={"email"}
                               placeholder={"e-mail address"} id={"newsletter"}
                               onChange={(event)=>setNewsletterValue(event.target.value)}/>
                        <input className={"newsletter-submit"} type={"submit"} value={"Send"}/>
                    </form>
                </div>
                <a className={"footer-linkToUp"} href={"#"}> Go up</a>
            </div>
        </div>
    )
}