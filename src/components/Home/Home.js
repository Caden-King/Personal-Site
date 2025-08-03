import React from "react"
import "./Home.css"

export default function Home() {
    const [loaded, setLoaded] = React.useState(false)

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
                <img className="mainimage"
                    onLoad={() => setLoaded(true)}
                    style={{ 
                        opacity: loaded ? 1 : 0
                        }}
                    src={process.env.PUBLIC_URL + '/portrait2.PNG'} 
                    alt=""/>
            </div>
        </div>
    )
}