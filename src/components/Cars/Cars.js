import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {carActions, carReducer} from "../../store";

const Cars = () => {

    const {cars,status} = useSelector(({cars}) => cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [])

    return (
        <div>
            {status && <h1>{status}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};