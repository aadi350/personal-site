import React from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import './BlogTitle.scss';

const BlogTitle = (props) => {
    return(
        <>
            <Link to={"./writing/{props.blogtitle}"}>
            <div class="blogcontainer">
                <div class="blogdetails">
                    <div class="blogname">{props.name}</div>
                </div>
                <div>
                    <img class="projectimage" src={props.imagelink}  height="150%"></img>
                </div>
            </div>
            </Link>

       
        </>
    )
}

export default BlogTitle;