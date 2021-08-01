import React, { useState } from 'react'
import bgImage from "./bgsmallimg.png"
import myColorFulImage from "../../Image/RagibColor.jpg"
import myBWImage from "../../Image/RagibBW.jpg"
import Typewriter from 'typewriter-effect';
import MyButton from '../Buttons/myButton';
const HeroSection = () => {
    const [blackAndWhite, setBlackAndWhite] = useState(true);
    const [shake, setShake] = useState(false);
    const imgStyle = {
        borderRadius: "50%",
        height: "200px",
        width: "200px",
        linearGradient: "rgba(black,0.5)"
    }
    return (
        <div>
            <div className="hero-section active animate__animated animate__bounceInRight" >
                <div className="my-image animate__animated animate__backInRight hero-child">
                    <img onMouseOver={() => setBlackAndWhite(false)} onMouseOut={() => setBlackAndWhite(true)} style={imgStyle} src={blackAndWhite ? myBWImage : myColorFulImage} />
                </div>
                <div className="intro hero-child">

                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1500)
                                .typeString('<h2>Hello There!</h2>')
                                .pauseFor(1500)
                                .changeDeleteSpeed(3500)
                                .deleteAll()
                                .typeString("<h2>This is Ragib</h2>")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("<h2>I am a Full-Stack Software Dev</h2>")
                                .start();
                        }}
                    />                   
                </div>
                <div className="hire-me-button hero-child">
                <MyButton content="Hire Me"/>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
