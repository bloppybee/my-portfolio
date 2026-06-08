import "./Stack.css"
import HTML from "./../../assets/HTML.png"
import CSS from "./../../assets/CSS.png"
import Javascript from "./../../assets/Javascript.png"
import React from "./../../assets/React.png"
import Figma from "./../../assets/Figma.png"
import Bootstrap from "./../../assets/Bootstrap.jpg"

function Stack() {
    return (
        <div className="stack-content">
            <div className="stack-text">
                <h3>Tech Stack</h3>

                <p>Skilled in HTML, CSS, Javascript, React.js, Figma e.t.c. </p>
            </div>

            <div className="stack-images">
                <img src={HTML} alt="" />
                <img src={CSS} alt="" />
                <img src={Javascript} alt="" />
                <img src={React} alt="" />
                <img src={Figma} alt="" />
                <img src={Bootstrap} alt="" />

            </div>
        </div>
    )
}

export default Stack;
