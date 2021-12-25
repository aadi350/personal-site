import React from "react";
import Skill from './Skill/Skill';
import './Skills.scss';
import Particle from "react-particles-js";
import particlesConfig from "../../../assets/particlesConfig.json";
import {faBroom} from '@fortawesome/free-solid-svg-icons';
import { faDatabase, faTornado } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

    return (
        <>

        <div class="skillscontainer">

            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Data Wrangling</div>
                    <hr></hr>
                  <Skill name='Data Cleansing' />
                    <Skill name='SQL'  />
                    <Skill name='ETL Tasks'  />
                    <Skill name='Big Data Handling' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>

            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Machine Learning</div>
                    <hr></hr>
                    <Skill name='Risk Modeling' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Multivariate Classification' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Churn Prediction' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Customer Segmentation' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Deep Learning</div>
                    <hr></hr>
                    <Skill name='Chatbot Deployment' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Recommendation Engines' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Image Classification' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
            <div class="skillcontainer">
                <div class="projectdetails">
                    <div class="skillname">Data Viz</div>
                    <hr></hr>
                    <Skill name='Dashboarding' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Interactive Visualization' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                    <Skill name='Prescriptive Analytics' img='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg' />
                </div>
            </div>
        </div>

            <Particle params={particlesConfig} className="particles" />
        </>
    );
}

export default Skills;
