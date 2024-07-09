import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

export default function App() {
    const [curTab, setCurTab] = React.useState("home")

    return (
        <div className="container">
            <Navbar curTab={curTab} setCurTab={setCurTab}/>
            <Content curTab={curTab} />
        </div>
    )
}