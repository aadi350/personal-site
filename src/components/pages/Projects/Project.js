import React from 'react';
import './Project.scss'
import Tag from './Tag'


const Project = (props) => {
    return (
        <div class="projectcontainer">
            <div class="projectdetails">
                <div class="projectname">{props.name}</div>
            {props.name}
                <div class="projecttags">
                    <Tag text="texxt" color="red"/>
                    </div>
            </div>
            <div class="projectimage">

            </div>
        </div>
    );
}

export default Project;