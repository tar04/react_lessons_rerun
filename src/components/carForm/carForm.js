import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";

const CarForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const {formErrors} = useSelector(({cars})=>cars);

    const dispatch = useDispatch();

    const submit = async (newCar) => {
        await dispatch(carActions.create({car: newCar}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register('model')}/></label>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <label>Price:<input type="text" {...register('price')}/></label>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <label>Year:<input type="text" {...register('year')}/></label>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <button>Send</button>
        </form>
    );
};

export {CarForm};