import React from 'react';
import './Projects.scss'
import Project from './Project';

const Projects = () => {
    return (
        <div class="projectscontainer">
                <Project 
                    name="Automated ADministrative Informant"
                    description="A fully automated Chatbot, deployed on
Dialogflow for the Department of Electrical
and Computer Engineering" link='https://ecng.sta.uwi.edu/chat/' tags={[['gcp', 'cloud'], ['nlp', 'field']]} />
        </div>
    );
}

export default Projects;