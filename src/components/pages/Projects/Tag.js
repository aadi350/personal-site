import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './Tag.scss'



const  Tag = (props) => {
    let tagType = "tag tag-lg";
    
    switch(props.tagType) {
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
        <span class={tagType}>
            #{props.text}
        </span>
        );
}

export default Tag;