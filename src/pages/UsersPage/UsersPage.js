import React from "react";
import {Outlet} from "react-router-dom";

import {Users} from "../../components";
import "./UsersPage.css";

const UsersPage = () => {
    return (
        <div className={"usersPage"}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};