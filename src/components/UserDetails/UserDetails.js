import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";
import {SingleUserDetails} from "../SingleUser/SingleUserDetails";

const UserDetails = () => {

    const {id} = useParams();

    const [userById, setUSerById] = useState(null);

    const {state: user} = useLocation();

    useEffect(() => {
        if (id) {
            userService.getById(id).then(user => setUSerById(user));
        } else {
            setUSerById(user);
        }
    }, [id]);

    return (
        <div>
            {userById && <SingleUserDetails user={userById}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};