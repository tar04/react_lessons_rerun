import React from "react";
import {useDispatch} from "react-redux";

import {deleteCat, updateCat} from "../../store";

const Cat = ({cat}) => {

    const {id, name} = cat;

    let dispatch = useDispatch();

    const del = () => {
        dispatch(deleteCat({id}));
    }

    const update = () => {
        dispatch(updateCat({cat}));
    }

    return (
        <div>
            {id} - {name}
            <button onClick={del}>Delete</button>
            <button onClick={update}>Update</button>
        </div>
    );
};

export {Cat};