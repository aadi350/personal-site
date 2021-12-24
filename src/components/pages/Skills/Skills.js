import React from "react";
import Skill from './Skill/Skill';
import './Skills.scss';
import Particle from "react-particles-js";
import particlesConfig from "../../../assets/particlesConfig.json";


const Skills = () => {
    return (
        <div class="skillscontainer">

            <Particle params={particlesConfig} className="particles" />
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Data Wrangling</div>
                    <hr></hr>
                    <Skill name='Skill name' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>

            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Machine Learning</div>
                    <hr></hr>
                    <Skill name='Skill name' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Deep Learning</div>
                    <hr></hr>
                    <Skill name='Skill name' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Data Viz</div>
                    <hr></hr>
                    <Skill name='Skill name' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Skills;