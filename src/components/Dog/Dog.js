import React from "react";

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            {name}<button onClick={() => dispatch({type: "delDog", payload: id})}>Delete</button>
        </div>
    );
};

export {Dog};