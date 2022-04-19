import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
    return (
        <div>
            <div className={"menu"}>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"} replace>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {HomePage};