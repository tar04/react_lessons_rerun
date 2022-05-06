import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../store";

const CarForm: FC = () => {

    const {register, reset, handleSubmit} = useForm<ICar>();

    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            Model: <input type="text" placeholder={""} {...register("model")}/>
            Price: <input type="text" placeholder={""} {...register("price")}/>
            Year: <input type="text" placeholder={""} {...register("year")}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};