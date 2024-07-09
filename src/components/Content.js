import React from "react"

export default function Content(props) {

    let content

    if (props.curTab === "home")
    {
        content = (
            <div className="home">
                <div className="home--leftpane fadein">
                    <div className="home--bio">
                        <h1>Hi, I'm Caden.</h1>
                        <p>I'm a software engineering major at San Jose State University.</p>
                        <p></p>
                    </div>
                </div>
                <div className="home--rightpane fadein">
                    <img className="home--portrait" src="portrait.PNG" alt="test"/>
                </div>
            </div>
        )
    }
    else if (props.curTab === "projects")
    {
        content = (
            <div className="projects">
                <div className="projects--card slide" onClick={() => { window.open("https://www.google.com") }}>
                    <div className="projects--info">
                        <h2 className="projects--title">Portfolio Site</h2>
                        <ul className="projects--list">
                            <li className="projects--listitem">This site was written from scratch using React.</li>
                            <li className="projects--listitem">Click on any one of these projects to see more about them.</li>
                        </ul>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" className="projects--image" alt="React Logo" />
                </div>
                <div className="projects--card slide" onClick={() => { window.open("https://drive.google.com/file/d/1IolxtC0QnP_GI9iUhm2ZcJLuAmM5wcLO/view?usp=sharing") }}>
                    <div className="projects--info">
                        <h2 className="projects--title">The Music Thing</h2>
                        <ul className="projects--list">
                            <li className="projects--listitem">Album rating website using Spotify API</li>
                            <li className="projects--listitem">You can rate, track, write reviews, and even discover your favorite albums.</li>
                            <li className="projects--listitem">I was responsible for the website's backend, and it was written with Django.</li>
                        </ul>
                    </div>
                        <img src="musicthingthumbnail.png" className="projects--image" alt="Music Thing Logo" />
                    </div>

                <div className="projects--card slide" onClick={() => { window.open("https://drive.google.com/file/d/1Yv5ilG4Wy74aImkpDzQcajpdPOMdgFfu/view?usp=sharing") }}>
                    <div className="projects--info">
                        <h2 className="projects--title">BayMart</h2>
                        <ul className="projects--list">
                            <li className="projects--listitem">A simulated online grocery store</li>
                            <li className="projects--listitem">Customers can order food for delivery, and the store owner can track stock in real time.</li>
                            <li className="projects--listitem">I was responsible for a combination of frontend and backend on a team of 6, using HTML/CSS and NodeJS</li>
                        </ul>
                    </div>
                    <img src="baymart.png" className="projects--image" alt="React Logo" />
                </div>

                <div className="projects--card slide" onClick={() => { window.open("https://www.google.com") }}>
                    <div className="projects--info">
                        <h2 className="projects--title">Coffee Tasting App</h2>
                        <ul className="projects--list">
                            <li className="projects--listitem">A mobile app to optimize the taste of your morning coffee</li>
                            <li className="projects--listitem">Track each variable of your morning brew to help dial-in your brew method.</li>
                            <li className="projects--listitem">Answer simple questions about how your coffee tastes and get tailored suggestions.</li>
                        </ul>
                    </div>
                    <p className="projects--image">WIP</p>
                </div>
            </div>
        )
    }
    else if (props.curTab === "resume") {
        content = (
            <div className="resume fadein">
                <button onClick={() => window.open("Caden King Resume.pdf") }>Download</button>
                <object class="pdf" data="Caden King Resume.pdf">asdf</object>
            </div>
        )
    }
    else {
        content = (
            <div className="contact">
                <div className="contact--card">
                    <h3>Here's my contact information. I'll be looking for a position next summer in 2025.</h3>
                    <div className="contact--emailcontainer">
                        <img src="email.png" width="40px" alt="Email Icon" />
                        <p>ivashinking@gmail.com</p>
                    </div>
                    <div className="contact--linkedincontainer">
                        <img src="linkedin.webp" width="40px" alt="LinkedIn Icon" />
                        <p><a href="https://www.linkedin.com/in/caden-king-dev/">caden-king-dev</a></p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <main className="content">
            { content }
        </main>
    )
}