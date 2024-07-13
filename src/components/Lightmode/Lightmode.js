import React from "react"
import "./Lightmode.css"

export default function Lightmode(props) {
    return (
        <div className="lightmode" onClick={props.toggleLightMode}>
            <div className={"lightmode--circle" + (props.lightMode ? " lightmode--circle-lightmode" : "")}>
                <img src={process.env.PUBLIC_URL + '/darkmode.png'} alt="lightmode Icon" />
            </div>
        </div>
    )
}