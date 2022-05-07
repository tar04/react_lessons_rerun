import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store";

const CarDetailsPage: FC = () => {

    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const {car} = useAppSelector(state => state.carReducer);

    useEffect(() => {
        if (id) {
            dispatch(carActions.getById({id}));
        }
    }, [id, dispatch]);

    return (
        <div>
            {car && <div>{JSON.stringify(car)}</div>}
        </div>
    );
};

export {CarDetailsPage};