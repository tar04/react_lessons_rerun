import React, {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar}) => {

    const [cars, setCars] = useState(null);

    useEffect(() => {
        carService.getAll().then(cars => setCars(cars));
    }, [])

    useEffect(() => {
        if (newCar){
            setCars([...cars, newCar]);
        }
    }, [newCar])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};