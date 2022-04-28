import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {add} from "../store";

const Form = () => {

    const nameInput = useRef();

    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" placeholder={"name"} ref={nameInput}/>
            <button onClick={() => dispatch(add({user: nameInput.current.value}))}>Send</button>
        </div>
    );
};

export {Form};