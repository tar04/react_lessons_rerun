import React from "react";
import {Link} from "react-router-dom";

import "./Post.css";

const Post = ({post}) => {

    const {id,title}=post;

    return (
        <div className={"post"}>
            <div className={"postInfo"}>{id}) {title} </div>
            <button><Link to={id.toString()} state={post}>Get details</Link></button>
        </div>
    );
};

export {Post};