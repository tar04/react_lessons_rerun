import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[],
    car: ICar | null,
}

const initialState: IState = {
    cars: [],
    car: null
};

const getAll = createAsyncThunk<ICar[], void>(
    "carSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const create = createAsyncThunk<ICar, { car: ICar }>(
    "carSlice/create",
    async ({car}) => {
        const {data} = await carService.create(car);
        return data;
    }
);

const getById = createAsyncThunk<ICar, { id: string }>(
    "carSlice/getById",
    async ({id}) => {
        const {data} = await carService.getById(id);
        return data;
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.car = action.payload
            })
    }
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll,
    create,
    getById,
};

export {
    carReducer,
    carActions,
}