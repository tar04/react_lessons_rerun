import React, {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import "./Users.css";

const Users = ({setChosenUser,setPosts}) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users))
    }, []);


    return (
        <div className={"users"}>
            {!users && <h1>Loading...</h1>}
            {users && users.map(user => <User key={user.id} user={user} setChosenUser={setChosenUser} setPosts={setPosts}/>)}
        </div>
    );
};

export {Users};