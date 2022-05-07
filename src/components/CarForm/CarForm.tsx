import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../store";

const CarForm: FC = () => {

    const {register, handleSubmit, reset} = useForm<ICar>();

    let dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            Model: <input type="text" placeholder={'model'} {...register('model')}/>
            Year: <input type="text" placeholder={'year'} {...register('year')}/>
            Price: <input type="text" placeholder={'price'} {...register('price')}/>
            <button>Send</button>
        </form>
    );
};

export {CarForm};