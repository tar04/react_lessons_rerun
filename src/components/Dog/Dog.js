import React from "react";
import {useDispatch} from "react-redux";
import {deleteDog, updateDog} from "../../store";

const Dog = ({dog: {id, name}}) => {

    let dispatch = useDispatch();

    const del = () => {
        dispatch(deleteDog({id}))
    }

    const update = () => {
        dispatch(updateDog({id}))
    }

    return (
        <div>
            {id} - {name}
            <button onClick={del}>Delete</button>
        </div>
    );
};

export {Dog};