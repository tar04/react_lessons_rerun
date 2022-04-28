import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addDog, resetDog} from "../../store";

const DogForm = () => {

    const {dogForUpdate} = useSelector(state => state["animalsReducer"]);

    const dogInput = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate) {
            dogInput.current.value = dogForUpdate.name;
        }
    }, [dogForUpdate]);

    const addNewDog = () => {
        if (!dogForUpdate) {

            dispatch(addDog({dog: dogInput.current.value}));
        } else {
            dispatch(resetDog({dog:{id:dogForUpdate.id,name:dogInput.current.value}}))
        }
        dogInput.current.value = "";
    }

    return (
        <div>
            <input type="text" placeholder={"Enter dog"} ref={dogInput}/>
            <button onClick={addNewDog}>{dogForUpdate ? 'Update' :'Add'}</button>
        </div>
    );
};

export {DogForm};