import React, {useRef} from "react";

const FormForAnimals = ({dispatch}) => {

    const dogsInput = useRef();

    const catsInput = useRef();

    return (
        <FormForAnimals>
            <input type="text" placeholder={"Enter dog"} ref={dogsInput}/>
            <button onClick={()=>dispatch({type:'addDog',payload:{id:new Date().getTime(),name:dogsInput.current.value}})}>Save</button>
            <input type="text" placeholder={"Enter cat"} ref={catsInput}/>
            <button onClick={()=>dispatch({type:'addCat',payload:{id:new Date().getTime(),name:catsInput.current.value}})}>Save</button>
            <button>Save</button>
        </FormForAnimals>
    );
};

export {FormForAnimals};