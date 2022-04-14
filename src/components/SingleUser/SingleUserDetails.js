import React from "react";
import {useNavigate} from "react-router-dom";

import "./SingleUserDetails.css";

const SingleUserDetails = ({user: {name, username, email, address: {street, suite, city, zipcode}, phone, website}}) => {

    const navigate = useNavigate();

    return (
        <div className={"singleUser"}>
            <h2>Name: {name}, username: {username}</h2>
            <h3>Address:</h3>
            <h2>Street:{street}, suite: {suite}, city: {city}, zipcode: {zipcode}</h2>
            <h3>Contact information:</h3>
            <h2>Email: {email}, phone: {phone}, website: {website}</h2>
            <button onClick={()=>navigate("posts")}>Get posts</button>
        </div>
    );
};

export {SingleUserDetails};