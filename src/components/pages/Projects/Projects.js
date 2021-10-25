import React from "react";
import "./Projects.scss";
import Project from "./Project";

const Projects = () => {
  return (
    <div class="projectscontainer">
      <Project
        name="Automated ADministrative Informant"
        description="A fully automated Chatbot, deployed on
Dialogflow for the Department of Electrical
and Computer Engineering"
        imagelink="https://t4.ftcdn.net/jpg/02/11/61/95/360_F_211619589_fnRk5LeZohVD1hWInMAQkWzAdyVlS5ox.jpg"
        link="https://ecng.sta.uwi.edu/chat/"
        tags={[
          ["gcp", "cloud"],
          ["nlp", "field"],
        ]}
      />

<Project
        name="Emotion Classification"
        description="Offline Emotion-detection Convolutional Neural Network for edge deployment"
        gitlink="https://github.com/aadi350/emotion-classify-browser"
        imagelink="https://www.banuba.com/hubfs/shutterstock_1651644223-1.jpg"
        tags={[
          ["TensorflowJS", "tech"],
          ["cv", "field"],
        ]}
      />
    </div>
  );
};

export default Projects;
