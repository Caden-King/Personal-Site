import React from "react"
import "./Projects.css"

export default function Projects() {
    return (
        <div className="projects">
            <div className="projects--card slide" onClick={() => { window.open("https://github.com/Caden-King/Personal-Site") }}>
                <div className="projects--info">
                    <h2 className="projects--title">Portfolio Site</h2>
                    <ul className="projects--list">
                        <li>This site was written from scratch using React.</li>
                        <li>Click on any one of these projects to see more about them.</li>
                    </ul>
                </div>
                <img src={process.env.PUBLIC_URL + '/logo192.png'} className="projects--image" alt="React Logo" />
            </div>

            <div className="projects--card slide" onClick={() => { window.open("") }}>
                <div className="projects--info">
                    <h2 className="projects--title">Reinforcement Learning 3D Playground</h2>
                    <ul className="projects--list">
                        <li>This was my SJSU Senior Project, and it was made in Unity.</li>
                        <li>In the game, players observe AI agents learning how to reach a finish line.</li>
                        <li>Players adjust environment conditions and the hyperparameters of the model.</li>
                        <li>This teaches the fundamentals of reinforcement learning to the player.</li>
                        <li>We made different environments to choose from, with three unique minigames for the model to optimize.</li>
                        <li>I was responsible for the C# machine learning code and the game logic.</li>
                    </ul>
                </div>
                    <img src={process.env.PUBLIC_URL + '/UnityLogo.png'} className="projects--image" alt="Unity Logo" />
            </div>
            
            <div className="projects--card slide" onClick={() => { window.open("https://drive.google.com/file/d/1IolxtC0QnP_GI9iUhm2ZcJLuAmM5wcLO/view?usp=sharing") }}>
                <div className="projects--info">
                    <h2 className="projects--title">The Music Thing</h2>
                    <ul className="projects--list">
                        <li>Album rating website using Spotify API</li>
                        <li>You can rate, track, write reviews, and even discover your favorite albums.</li>
                        <li>I was responsible for the website's backend, and it was written with Django.</li>
                    </ul>
                </div>
                    <img src={process.env.PUBLIC_URL + '/musicthingthumbnail.png'} className="projects--image" alt="Music Thing Logo" />
            </div>

            <div className="projects--card slide" onClick={() => { window.open("https://drive.google.com/file/d/1Yv5ilG4Wy74aImkpDzQcajpdPOMdgFfu/view?usp=sharing") }}>
                <div className="projects--info">
                    <h2 className="projects--title">BayMart</h2>
                    <ul className="projects--list">
                        <li>A simulated online grocery store</li>
                        <li>Customers can order food for delivery, and the store owner can track stock in real time.</li>
                        <li>I was responsible for a combination of frontend and backend on a team of 6, using HTML/CSS and NodeJS</li>
                    </ul>
                </div>
                <img src={process.env.PUBLIC_URL + '/baymart.png'} className="projects--image" alt="BayMart Logo" />
            </div>

            {/* <div className="projects--card slide" >
                <div className="projects--info">
                    <h2 className="projects--title">Coffee Tasting App</h2>
                    <ul className="projects--list">
                        <li>A mobile app to optimize the taste of your morning coffee</li>
                        <li>Track each variable of your morning brew to help dial-in your brew method.</li>
                        <li>Answer simple questions about how your coffee tastes and get tailored suggestions.</li>
                    </ul>
                </div>
                <p className="projects--image">WIP</p>
            </div> */}
        </div>
    )
}