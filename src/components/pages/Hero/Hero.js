import React from "react";
import './Hero.scss'
import Particle from "react-particles-js";
import particlesConfig from "../../assets/particlesConfig.json";

const Hero = () => {
    return (
         
            <div class="hero-container">
                <Particle params={particlesConfig} className="particles" />
                <div class="hero">

                    
            <div id="front">I build <b>value</b> from <b>data</b></div>
            <div id="back"><div id="upper">Data</div><div id="lower">Scientist</div></div>
                </div>

            </div>
    );
};

export default Hero ;