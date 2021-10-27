import React from 'react';
import './Project.scss'
import Tag from './Tag'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    let projectlinks = [];
    let tagType = "tag tag-lg";
    
    if (props.gitlink != null) {
        projectlinks.push(<a href={props.gitlink} style={{color: 'black', fontSize: '1.4em'}} target="_blank"><FontAwesomeIcon class="projecticon" icon={faGithub} /></a>)
    }

    if (props.link != null) {
        projectlinks.push(<a href={props.link} style={{color: 'blue', fontSize: '1.4em'}}  target="_blank"><FontAwesomeIcon class="projecticon" icon={faLink} /></a>)
    }

    switch(props.tagType) {
        case "nvidia":
            tagType = tagType + " " +"nvidia"
        case "field":
            tagType = tagType + " " + "tag-field"
            break;
        case "tech":
                tagType = tagType + " " + "tag-tech"
                break;
        case "cloud":
             tagType = tagType + " " + "tag-cloud";
            break;
        case "bigdata":
             tagType = tagType + " " + "tag-bigdata";
            break
        default:
            tagType="";
            break;
    }
    return (
        <a href={props.mainlink} target="_blank">
        <div class="projectcontainer">
            <div class="projectdetails">
                <div class="projectname">{props.name}</div>
              
                <div class="projectdescription">{props.description}</div>
                {projectlinks}
                <div class="projecttags">
                    {
                          props.tags.map(function(each){
                            return(<Tag key={each.name} text={each[0]} tagType={each[1]}/>)
                        })
                    }
                </div>
            </div>
            <div>
           
                <img class="projectimage" src={props.imagelink}  height="150%"></img>
            </div>
        </div>
        </a>
    );
}

export default Project;