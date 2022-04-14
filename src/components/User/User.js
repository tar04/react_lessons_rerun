import React from "react";
import {Link} from "react-router-dom";

import "./user.css";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div className={"user"}>
            <div className={"userInfo"}>{id}) {name} ({username})</div>
            <button><Link to={id.toString()} state={user}>Get details</Link></button>
        </div>
    );
};

export {User};