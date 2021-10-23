import React from 'react';
import './Projects.scss'
import Project from './Project';

const Projects = () => {
    return (
        <div class="projectscontainer">
                <Project 
                    name="Automated ADministrative Informant"
                    description="A fully automated Chatbot, deployed on
Google Platform for the Department of Electrical
and Computer Engineering" link='http://www.google.com/' tags={[['gcp', 'cloud'], ['nlp', 'field']]} />
        </div>
    );
}

export default Projects;