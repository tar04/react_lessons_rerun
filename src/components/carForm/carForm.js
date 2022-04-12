import React from "react";
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = ({setNewCar}) => {

    const {register, reset, handleSubmit} = useForm();

    const submit = async (data) => {
        const car = await carService.create(data);
        setNewCar(car);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register("model")}/></label></div>
            <div><label>Price:<input type="number" {...register("price", {valueAsNumber: true})}/></label></div>
            <div><label>Year:<input type="number" {...register("year", {valueAsNumber: true})}/></label></div>
            <button>Send</button>
        </form>
    );
};

export {CarForm};