import React from "react";
import {useState} from "react";
import facebook from "../public/facebook.svg";
import instagram from "../public/square-instagram.svg";
import youtube from "../public/youtube.svg";
import twitter from '../public/square-twitter.svg';

export const Footer = () =>{
    const [newsletterValue, setNewsletterValue] = useState("")

    return(
        <div className={"footer-bg"}>
            <div className={"footer-container"}>
                <div className={"footer-up"}>
                    <div className={"footer-left"}>
                        <h4 className={"footer-left-heading"}>Fallow us</h4>
                        <div>
                            <img src={facebook} alt={"facebook-icon"} className={"footer-icon"} />
                            <img src={twitter} alt={"twitter-icon"} className={"footer-icon"} />
                            <img src={instagram} alt={"instagram"} className={"footer-icon"} />
                            <img src={youtube} alt={"youtube"} className={"footer-icon"} />
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