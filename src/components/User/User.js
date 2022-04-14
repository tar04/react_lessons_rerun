import React from "react";
import {Link} from "react-router-dom";

import "./User.css";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div className={"user"}>
            <div className={"userInfo"}>{id}) {name} ({username})</div>
            <div className={"userButtons"}>
                <button><Link to={id.toString()} state={user}>Get details</Link></button>
                <button><Link to={`${id.toString()}/albums`} state={user}>Albums</Link></button>
            </div>
        </div>
    );
};

export {User};