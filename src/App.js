import React from "react"

import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content"
import Lightmode from "./components/Lightmode/Lightmode"

import "./colors.css"


export default function App() {
    const [curTab, setCurTab] = React.useState("home")
    const [lightMode, setLightMode] = React.useState(false)

    function toggleLightMode() {
        return setLightMode(oldLightMode => !oldLightMode)
    }

    React.useEffect(() => {
        if (lightMode) {
            document.body.classList.add("light")
        }
        else {
            document.body.classList.remove("light")
        }
    }, [lightMode])

    return (
        <div>
            <Navbar curTab={curTab} setCurTab={setCurTab} lightMode={lightMode}/>
            <Content curTab={curTab} />
            <Lightmode lightMode={lightMode} toggleLightMode={toggleLightMode} />
        </div>
    )
}