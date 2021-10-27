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
        mainlink="https://ecng/sta.uwi.edu/chat"
        link="https://ecng.sta.uwi.edu/chat/"
        tags={[
          ["gcp", "cloud"],
          ["nlp", "field"],
        ]}
      />

      <Project
        name="Emotion Classification"
        description="Offline Emotion-detection Convolutional Neural Network for edge deployment"
        mainlink="https://github.com/aadi350/emotion-classify-browser"
        gitlink="https://github.com/aadi350/emotion-classify-browser"
        imagelink="https://www.banuba.com/hubfs/shutterstock_1651644223-1.jpg"
        tags={[
          ["TensorflowJS", "tech"],
          ["computervision", "field"],
        ]}
      />



<Project
        name="Big Data Machine Learning"
        description="Predicting flight delay using NVIDIA Rapids and Dask on GPU from the IBM Flight Delay Dataset"
        mainlink="https://github.com/aadi350/ontime"
        gitlink="https://github.com/aadi350/ontime"
        imagelink="https://i.ibb.co/5BQFvhG/ontime.png"
        tags={[
          ["NVIDIARapids", "nvidia"],
          ["randomforest", "field"],
        ]}
      />

<Project
        name="AR Baggage Measurement"
        description="Baggage measurement via Augmented Reality on Android"
        mainlink="https://github.com/aadi350/3020_fyp"
        gitlink="https://github.com/aadi350/3020_fyp"
        imagelink="https://www.ebsco.com/sites/g/files/nabnos191/files/acquiadam-assets/top-ten-augmented-reality-tools-blog-image-780.jpg"
        tags={[
          ["ARCore", "tech"],
          ["computervision", "field"],
        ]}
      />
    </div>
  );
};

export default Projects;
