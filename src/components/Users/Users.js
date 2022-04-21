import React, {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import "./Users.css";
import {useSearchParams} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        userService.getAll(query.get('page'),2).then(users => setUsers(users));
    }, [query]);

    const nextPage = () => {
        /*let page = query.get('page');
        page = +page + 1;
        setQuery({page: page.toString()});*/
        console.log(query.entries());
    }

    const prevPage = () => {
        let page = query.get('page');
        page = +page - 1;
        setQuery({page: page.toString()});
    }

    return (
        <div className={"users"}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
            <div className={"pageController"}>
                {/*{query.get('page') != 1 && <button onClick={() => prevPage()}>Prev page</button>}*/}
                {users && users[users.length - 1].id !== 10 && <button onClick={() => nextPage()}>Next page</button>}
            </div>
        </div>
    );
};

export {Users};