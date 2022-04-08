import React from "react";

const UserDetails = ({chosenUser: {id, username, email, phone, website, address: {street, city, suite, zipcode}},getPosts}) => {

    return (
        <div>
            <div>
                <h3>Id: {id}</h3>
                <h3>Username: {username}</h3>
                <h3>email: {email}</h3>
                <h3>phone: {phone}</h3>
                <h3>website: {website}</h3>
                <hr/>
                <h2>Address:</h2>
                <h3>street: {street}</h3>
                <h3>city: {city}</h3>
                <h3>suite: {suite}</h3>
                <h3>zipcode: {zipcode}</h3>
            </div>
            <button onClick={()=>getPosts(id)}>Show posts</button>
        </div>
    );
};

export {UserDetails};