import React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact fadein">
            <div className="contact--card">
                <h3>Here's my contact information. I'll be looking for a position in summer 2025.</h3>
                <div className="contact--handlecontainer">
                    <img src={process.env.PUBLIC_URL + '/email.png'} width="40px" alt="Email Icon" />
                    <p>ivashinking@gmail.com</p>
                </div>
                <div className="contact--handlecontainer">
                    <img src={process.env.PUBLIC_URL + '/linkedin.webp'} width="40px" alt="LinkedIn Icon" />
                    <p><a href="https://www.linkedin.com/in/caden-king-dev/">caden-king-dev</a></p>
                </div>
            </div>
        </div>
    )
}