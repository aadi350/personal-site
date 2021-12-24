import React from 'react';
import './Skill.scss';

const Skill = (props) => {
    return (
        <div class="subskillcontainer">
            <img class="subskillimage" src={props.img}/>
            <div class="subskillname">
        {props.name}
        </div>
        </div>
    )
}

export default Skill