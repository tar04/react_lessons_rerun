import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addCat, addDog} from "../../store";


const CatForm = () => {

    const catInput = useRef();

    const dispatch = useDispatch();

    const addNewCat = () => {
        dispatch(addCat({cat: catInput.current.value}));
        catInput.current.value="";
    }

    return (
        <div>
            <input type="text" placeholder={"Enter cat"} ref={catInput}/>
            <button onClick={addNewCat}>Add</button>
        </div>
    );
};

export {CatForm};