import React from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import "./HomePage.css";
import {useAuth} from "../../hooks";

const HomePage = () => {

    const {user, logOut} = useAuth();

    const navigate = useNavigate();

    return (
        <div>
            <div className={"menu"}>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"} replace>Posts</NavLink>
                {user && <h1>{user}
                    <button onClick={() => logOut(()=>navigate("/"))}>Log out</button>
                </h1>}
            </div>
            <Outlet/>
        </div>
    );
};

export {HomePage};