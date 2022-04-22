import React, {useRef} from "react";

const FormForAnimals = ({dispatch}) => {

    const dogsInput = useRef();

    const catsInput = useRef();

    const dogsAdd = (e) => {
        e.preventDefault();
        dispatch({type: 'addDog', payload: {id: new Date().getTime(), name: dogsInput.current.value}});
        dogsInput.current.value="";
    }

    const catsAdd = (e) => {
        e.preventDefault();
        dispatch({type: 'addCat', payload: {id: new Date().getTime(), name: catsInput.current.value}});
        catsInput.current.value="";
    }

    return (
        <form>
            <input type="text" placeholder={"Enter dog"} ref={dogsInput}/>
            <button onClick={dogsAdd}>Save</button>
            <input type="text" placeholder={"Enter cat"} ref={catsInput}/>
            <button onClick={catsAdd}>Save</button>
        </form>
    );
};

export {FormForAnimals};