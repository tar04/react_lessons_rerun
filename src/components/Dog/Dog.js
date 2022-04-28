import React from "react";
import {useDispatch} from "react-redux";

import {deleteDog, updateDog} from "../../store";

const Dog = ({dog}) => {

    const {id, name}=dog;

    let dispatch = useDispatch();

    const del = () => {
        dispatch(deleteDog({id}));
    }

    const update = () => {
        dispatch(updateDog({dog}));
    }

    return (
        <div>
            {id} - {name}
            <button onClick={del}>Delete</button>
            <button onClick={update}>Update</button>
        </div>
    );
};

export {Dog};