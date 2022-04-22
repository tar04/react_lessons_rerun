import React, {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {useAuth} from "../../hooks";

const LoginPage = () => {

    const {logIn} = useAuth();

    const {state} = useLocation();

    const name = useRef();

    const navigate = useNavigate();

    const login = () => {
        const userName = name.current.value;
        logIn(userName, () => navigate(state.pathname, {replace: true}))
    }

    return (
        <div>
            <input type={"text"} ref={name} placeholder={"name"}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {LoginPage};