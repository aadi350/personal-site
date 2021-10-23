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
                  <a class="projectlink">
                     <FontAwesomeIcon class="projecticon" icon={faLink} />
                    {props.link}</a>

                <div class="projecttags">
                    {
                          props.tags.map(function(each){
                            return(<Tag key={each.name} text={each[0]} tagType={each[1]}/>)
                        })
                    }
                </div>
            </div>
            <div class="projectimage">

            </div>
        </div>
    );
}

export default Project;