import React from "react";
import {useDispatch} from "react-redux";

const Cat = ({cat: {id, name}}) => {

    let dispatch = useDispatch();

    const del = () => {

    }

    const update = () => {

    }

    return (
        <div>
            {id} - {name} <button onClick={del}>Delete</button>
        </div>
    );
};

export {Cat};