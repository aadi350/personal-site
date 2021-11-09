import React from "react";
import ReactDOM from "react-dom";
import './BlogTitle.scss';

const BlogTitle = (props) => {
    return(
        <>
        <a href={props.mainlink} target="_blank">
        <div class="blogcontainer">
            <div class="blogdetails">
                <div class="blogname">{props.name}</div>
              
              
            </div>
            <div>
           
                <img class="projectimage" src={props.imagelink}  height="150%"></img>
            </div>
        </div>
        </a>
        </>
    )
}

export default BlogTitle;