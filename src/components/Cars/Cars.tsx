import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "../Car/Car";
import {carActions} from "../../store";

const Cars: FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};