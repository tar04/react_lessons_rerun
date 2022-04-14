import React from "react";
import {Outlet} from "react-router-dom";

import {Posts} from "../../components";
import "./PostsPage.css";

const PostsPage = () => {
    return (
        <div className={"postsPage"}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};