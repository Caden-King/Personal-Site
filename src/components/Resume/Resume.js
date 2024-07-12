import React from "react"
import "./Resume.css"

export default function Resume() {
    return (
        <div className="resume fadein">
            <button onClick={() => window.open("Caden King Resume.pdf") }>Download</button>
            <object class="pdf" data={process.env.PUBLIC_URL + '/Caden King Resume.pdf'}>Caden King's Resume</object>
        </div>
    )
}