import React from "react"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home--leftpane fadein">
                <div className="home--bio">
                    <h1>Hi, I'm Caden.</h1>
                    <p>I just graduated from San Jose State University in Software Engineering.</p>
                    <p></p>
                </div>
            </div>
            <div className="home--rightpane fadein">
                <img src={process.env.PUBLIC_URL + '/portrait2.PNG'} alt="test"/>
            </div>
        </div>
    )
}