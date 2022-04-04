import React, {useEffect, useState} from "react";

import {User} from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setUsers(users));
    }, []);

    return (
        <div className={"users"}>
            <h1>Users:</h1>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};