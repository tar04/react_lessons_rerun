import React from "react";
import {Dog} from "../Dog/Dog";

const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs && dogs.map(dog=><Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};