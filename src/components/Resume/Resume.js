import React from "react"
import "./Resume.css"

export default function Resume() {
    return (
        <div className="resume fadein">
            <button onClick={() => window.open("https://drive.google.com/uc?export=download&id=1rWmi6pex2HGR27QxqasmKx_fAB9IbKIe") }>Download</button>
            <object class="pdf" data={process.env.PUBLIC_URL + '/Caden King Resume.pdf'}>Resume Preview</object>
        </div>
    )
}