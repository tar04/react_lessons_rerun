import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
};

export {Users};