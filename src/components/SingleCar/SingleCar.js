import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {carActions} from "../../store";

const SingleCar = ({car}) => {

    const {id, model, year, price} = car;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const deleteCar = () => {
        dispatch(carActions.deleteCarById({id}));
        navigate("/");
    }

    const updateCar = () => {
        dispatch(carActions.setCarForUpdate({car}));
        navigate("/");
    }

    return (
        <div>
            <h1>{id}) {model}</h1>
            <h3>Price: {price}</h3>
            <h3>Year: {year}</h3>
            <button onClick={deleteCar}>Delete</button>
            <button onClick={updateCar}>Update</button>
            <hr/>
        </div>
    );
};

export {SingleCar};