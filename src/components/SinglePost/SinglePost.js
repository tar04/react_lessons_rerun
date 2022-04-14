import React from "react";
import {useNavigate} from "react-router-dom";

import "./SinglePost.css";

const SinglePost = ({post: {id, title, body}}) => {

    const navigate = useNavigate();

    return (
        <div className={"singlePost"}>
            <h2>{id}) {title}</h2>
            <h3>{body}</h3>
            <button onClick={()=>navigate("comments")}>Get comments</button>
        </div>
    );
};

export {SinglePost};