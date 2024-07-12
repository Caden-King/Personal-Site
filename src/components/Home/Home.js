import React from "react"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home--leftpane fadein">
                <div className="home--bio">
                    <h1>Hi, I'm Caden.</h1>
                    <p>I'm a software engineering major at San Jose State University.</p>
                    <p></p>
                </div>
            </div>
            <div className="home--rightpane fadein">
                <img src={process.env.PUBLIC_URL + '/portrait.PNG'} alt="test"/>
            </div>
        </div>
    )
}