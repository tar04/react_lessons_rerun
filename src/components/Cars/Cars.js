import React, {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {

    const [cars, setCars] = useState(null);

    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(cars => setCars(cars));
    }, [updatedCar])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar]);
        }
        if (deletedCarId) {
            setCars(cars.filter(car => car.id !== deletedCarId))
            setDeletedCarId(null);
        }
    }, [newCar, deletedCarId])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                          setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {Cars};