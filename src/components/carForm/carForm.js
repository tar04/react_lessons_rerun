import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carService} from "../../services";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({setNewCar, carForUpdate, setCarForUpdate,setUpdatedCar}) => {

    // const [formError, setFormError] = useState({});

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate])

    const submit = async (data) => {
        if (!carForUpdate) {
            try {
                const car = await carService.create(data);
                setNewCar(car);
            } catch (e) {
                // setFormError(e.response.data);
            }
        } else {
            const updatedCar = await carService.updateById(carForUpdate.id, data);
            setUpdatedCar(updatedCar);
        }
        setCarForUpdate(null);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register("model")}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price:<input type="number" {...register("price", {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year:<input type="number" {...register("year", {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>Send</button>
        </form>
    );
};

export {CarForm};