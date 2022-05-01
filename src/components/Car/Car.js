import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {carActions} from "../../store";
import "./Car.css";

const Car = ({car}) => {

    const {id, model,year} = car;

    const dispatch = useDispatch();

    const updateCar = () => {
        dispatch(carActions.setCarForUpdate({car}));
    };

    const deleteCar = () => {
        dispatch(carActions.deleteCarById({id}));
    };

    return (
        <div className={"car"}>
            <Link to={`cars/${id.toString()}`} state={car}>{id} -- {model}</Link>
            <div>
                <button onClick={deleteCar}>Delete</button>
                <button onClick={updateCar}>Update</button>
            </div>
        </div>
    );
};

export {Car};