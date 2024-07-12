import React from "react"
import "./Navbar.css"

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <button className={"navbar--button" + (props.curTab === "home" ? " navbar--focused" : "")} onClick={() => props.setCurTab("home")}>Home</button>
            <button className={"navbar--button" + (props.curTab === "projects" ? " navbar--focused" : "")} onClick={() => props.setCurTab("projects")}>Projects</button>
            <button className={"navbar--button" + (props.curTab === "resume" ? " navbar--focused" : "")} onClick={() => props.setCurTab("resume")}>Resume</button>
            <button className={"navbar--button" + (props.curTab === "contact" ? " navbar--focused" : "")} onClick={() => props.setCurTab("contact")}>Contact</button>
        </nav>
    )
}