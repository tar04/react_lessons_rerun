import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";
import {SingleUserDetails} from "../SingleUser/SingleUserDetails";

const UserDetails = () => {

    const {state: user} = useLocation();

    const {id} = useParams();

    const [userById, setUSerById] = useState(user);

    useEffect(() => {
        if (!user) {
            userService.getById(id).then(user => setUSerById(user));
        } else {
            setUSerById(user);
        }
    }, [id, user]);

    return (
        <div>
            {userById && <SingleUserDetails user={userById}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};