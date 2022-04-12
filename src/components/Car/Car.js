import React from "react";

import "./Car.css";

const Car = ({car: {id, model, price, year}}) => {
    return (
        <div className={"car"}>
            <div>Id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>
        </div>
    );
};

export {Car};