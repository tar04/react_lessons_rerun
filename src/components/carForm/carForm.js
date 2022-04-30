import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../store";

const CarForm = () => {

    const {reset, register, handleSubmit, setValue} = useForm();

    const {formErrors, carForUpdate, updateErrors} = useSelector(({cars}) => cars);

    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            const {model, year, price} = carForUpdate;
            setValue("model", model);
            setValue("year", year);
            setValue("price", price);
        }
    }, [carForUpdate]);

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCarById({id: carForUpdate.id, car: newCar}))
        } else {
            await dispatch(carActions.createAsync({car: newCar}));
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register("model")}/></label>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            {updateErrors.model && <span>{updateErrors.model[0]}</span>}
            <label>Price:<input type="text" {...register("price")}/></label>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            {updateErrors.price && <span>{updateErrors.price[0]}</span>}
            <label>Year:<input type="text" {...register("year")}/></label>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            {updateErrors.year && <span>{updateErrors.year[0]}</span>}
            <button>{carForUpdate ? "Update" : "Add"}</button>
        </form>
    );
};

export {CarForm};