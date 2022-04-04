import React from "react";

const User = ({user:{id,name,username,email,address:{street,city,suite},phone,website}}) => {
    return (
        <div>
            <h4>{id}) <b>{name}</b> -- {username} -- {email}</h4>
            <h4>Address:</h4>
            <h5>city: {city}, street: {street}, suite:{suite} </h5>
            <h5>Phone:{phone}, website: {website}</h5>
        </div>
    );
};

export {User};