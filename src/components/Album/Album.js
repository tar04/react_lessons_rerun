import React from "react";
import {Link} from "react-router-dom";

import "./Album.css";

const Album = ({album: {id, userId, title}}) => {
    return (
        <div className={"album"}>
            <p>Id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <button><Link to={`${id.toString()}/photos`}>Get photos</Link></button>
        </div>
    );
};

export {Album};