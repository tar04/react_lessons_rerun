import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../store";
import {SingleCar} from "../../components";

const SingleCarPage = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {singleCar, singleCarError, singleCarStatus} = useSelector(({cars}) => cars);

    const {state} = useLocation();

    const [car, setCar] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!state) {
            dispatch(carActions.getSingleCar({id}));
            setCar(singleCar)
        } else {
            dispatch(carActions.resetSingleCarError());
            setCar(state);

        }
    }, [state, id, singleCar]);

    return (
        <div>
            {singleCarStatus && <h1>{singleCarStatus}</h1>}
            {singleCarError && <h1>Not found</h1>}
            {car && <SingleCar car={car}/>}
            <button onClick={() => navigate("/")}>Back to all cars</button>
        </div>
    );
};

export {SingleCarPage};