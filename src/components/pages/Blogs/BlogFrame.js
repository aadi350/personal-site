import Markdown from "markdown-to-jsx";
import React from "react";
import { render } from "react-dom";
import "./BlogFrame.scss";

const BlogFrame = (props) => {
  return (
    <div class="BlogFrameContainer">
      <div class="BlogContainer">
        <Markdown options={{ forceBlock: true }}>{props.markdown}</Markdown>
      </div>
    </div>
  );
};

export default BlogFrame;
