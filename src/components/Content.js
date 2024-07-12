import React from "react"
import Home from "./Home/Home"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Contact from "./Contact/Contact"

export default function Content(props) {

    let content

    if (props.curTab === "home")
    {
        content = <Home />
    }
    else if (props.curTab === "projects")
    {
        content = <Projects />
    }
    else if (props.curTab === "resume") {
        content = <Resume />
    }
    else {
        content = <Contact />
    }

    return (
        <main>
            { content }
        </main>
    )
}