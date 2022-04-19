import React, {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import "./Users.css";

const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users));
    }, []);

    useState()
    return (
        <div className={"users"}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};