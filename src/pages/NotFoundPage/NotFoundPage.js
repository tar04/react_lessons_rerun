import React from "react";
import {Link} from "react-router-dom";

import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className={"wrap"}>
            <h1>Page is not found</h1>
            <h2>Return to:</h2>
            <Link to={"users"}>Users</Link>
            <Link to={"posts"}>Posts</Link>
        </div>
    );
};

export {NotFoundPage};