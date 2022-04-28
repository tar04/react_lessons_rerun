import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addDog} from "../../store";


const DogForm = () => {
    const dogInput = useRef();

    const dispatch = useDispatch();

    const addNewDog = () => {
        dispatch(addDog({dog: dogInput.current.value}));
        dogInput.current.value = "";
    }

    return (
        <div>
            <input type="text" placeholder={"Enter dog"} ref={dogInput}/>
            <button onClick={addNewDog}>Add</button>
        </div>
    );
};

export {DogForm};