import React from "react";
import chocolate from "../public/chocolate.jpg";
import brocoli from "../public/brokoli.jpg";
import awokado from "../public/awokado.jpg";
import szafran from "../public/szafran.jpg";


export const InterestingFactsOnEntry = () =>{
    return(
        <div className={"entryPage_interestingFacts-bg"}>
            <h2 className={"interestingFacts-sectionHeading"} >Some interesting facts</h2>
            <div className={"entryPage_interestingFacts-box"}>
                <div className={"interestingFacts-element"}>
                    <img className={"interestingFacts-img"} src={chocolate} alt={"chocolate"}/>
                    <div className={"interestingFacts-text-Box"}>
                        <h3 className={"interestingFacts-heading"}>Chocolate</h3>
                        <p className={"interestingFacts-text"}>
                            Feel-Good Sensation: Chocolate is known for improving mood and inducing a sense of happiness
                            because it contains chemical compounds that stimulate the brain to produce endorphins, the
                            happiness hormones. However, excessive consumption of chocolate can lead to weight gain.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"entryPage_interestingFacts-box"}>
                <div className={"interestingFacts-element right-side-image"}>
                    <img className={"interestingFacts-img"} src="../public/garlic.jpg" alt={"garlic"}/>
                    <div className={"interestingFacts-text-Box"}>
                        <h3 className={"interestingFacts-heading"}>Garlic</h3>
                        <p className={"interestingFacts-text"}>
                            Natural Antibiotic: Garlic is valued for its antibacterial and antibiotic properties.
                            Many people believe it helps in treating infections, but it can also cause bad breath.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"entryPage_interestingFacts-box"}>
                <div className={"interestingFacts-element"}>
                    <img className={"interestingFacts-img"} src={brocoli} alt={"brokoli"}/>
                    <div className={"interestingFacts-text-Box"}>
                        <h3 className={"interestingFacts-heading"}>Broccoli</h3>
                        <p className={"interestingFacts-text"}>
                            Vitamin Powerhouse: Broccoli is rich in vitamins, especially vitamin C and vitamin K,
                            as well as fiber and antioxidants. It is often considered a healthy dietary component,
                            but not everyone likes it due to its taste.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"entryPage_interestingFacts-box"}>
                <div className={"interestingFacts-element right-side-image"}>
                    <img className={"interestingFacts-img"} src={awokado} alt={"awokado"}/>
                    <div className={"interestingFacts-text-Box"}>
                        <h3 className={"interestingFacts-heading"}>Avocado</h3>
                        <p className={"interestingFacts-text"}>
                            Health Treasure: Avocado is often referred to as a "superfood" due to its
                            richness in healthy fats, vitamins, minerals, and fiber. It is popular in
                            vegan and vegetarian diets. However, some critics point out its high calorie content
                        </p>
                    </div>
                </div>
            </div>
            <div className={"entryPage_interestingFacts-box"}>
                <div className={"interestingFacts-element"}>
                    <img className={"interestingFacts-img"} src={szafran} alt={"szafran"}/>
                    <div className={"interestingFacts-text-Box"}>
                        <h3 className={"interestingFacts-heading"}>Saffron</h3>
                        <p className={"interestingFacts-text"}>
                            The World's Most Expensive Spice: Saffron is one of the most expensive spices
                            in the world because it requires the manual harvest of thousands of crocus flowers
                            to obtain a small amount of saffron. It is prized for its unique flavor and color ,
                            but it is also a luxury product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}