import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './Tag.scss'



const  Tag = (props) => {
    let color;
    switch(props.color) {
        case "red":
            color="#E84855";
            break;
        default:
            color="green";
            break;
    }

    const tagstyle = {
                borderRadius: '10em',
                display: "inline-block",
                color: "white",
                padding: "0 0.5em",
                verticalAlign: "middle",
                textAlign: "center",
                width: '100%',
                backgroundColor: color
            }
    return (
        <div class="tag" style={tagstyle} >
             #{props.text}t
        </div>
    );
}

export default Tag;