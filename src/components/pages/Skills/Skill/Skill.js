import React from 'react';
import './Skill.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = (props) => {
    return (
        <div class="subskillcontainer">
          <FontAwesomeIcon icon={props.img} />
            <div class="subskillname">
        {props.name}
        </div>
        </div>
    )
}

export default Skill
