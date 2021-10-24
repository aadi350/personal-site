import React from 'react';
import './Project.scss'
import Tag from './Tag'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink
} from "@fortawesome/free-solid-svg-icons";


const Project = (props) => {
    return (
        <div class="projectcontainer">
            <div class="projectdetails">
                <div class="projectname">{props.name}</div>
              
                <div class="projectdescription">{props.description}</div>
                  <a class="projectlink" href={props.link} target="_blank">
                     <FontAwesomeIcon class="projecticon" icon={faLink} /></a>

                <div class="projecttags">
                    {
                          props.tags.map(function(each){
                            return(<Tag key={each.name} text={each[0]} tagType={each[1]}/>)
                        })
                    }
                </div>
            </div>
            <div class="projectimage">
                <img src="https://t4.ftcdn.net/jpg/02/11/61/95/360_F_211619589_fnRk5LeZohVD1hWInMAQkWzAdyVlS5ox.jpg"  height="150%"></img>
            </div>
        </div>
    );
}

export default Project;