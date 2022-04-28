import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addCat, resetCat} from "../../store";

const CatForm = () => {

    const {catForUpdate} = useSelector(state => state["animalsReducer"]);

    const catInput = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            catInput.current.value = catForUpdate.name;
        }
    }, [catForUpdate])

    const addNewCat = () => {
        if (!catForUpdate) {
            dispatch(addCat({cat: catInput.current.value}));
        } else {
            dispatch(resetCat({cat: {id: catForUpdate.id, name: catInput.current.value}}));
        }
        catInput.current.value = "";
    }

    return (
        <div>
            <input type="text" placeholder={"Enter cat"} ref={catInput}/>
            <button onClick={addNewCat}>{catForUpdate ? 'Update' : 'Add'}</button>
        </div>
    );
};

export {CatForm};