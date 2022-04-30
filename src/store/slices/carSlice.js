import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    updateErrors: {},
    singleCar: null,
    singleCarError: null,
    singleCarStatus: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);


const getSingleCar = createAsyncThunk(
    "carSlice/getSingleCar",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createAsync = createAsyncThunk(
    "carSlice/createAsync",
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}));
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data});
        }
    }
);

const deleteCarById = createAsyncThunk(
    "carSlice/deleteSingleCarById",
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const updateCarById = createAsyncThunk(
    "carSlice/updateCarById",
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            dispatch(updateCar({newCar: data}));
        } catch (e) {
            return rejectWithValue({status: e.message, updateErrors: e.response.data});
        }
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car);
            state.formErrors = {};
            state.updateErrors = {};
            state.status = "Success";
        },
        resetSingleCarError: (state) => {
            state.singleCarError = null;
        },
        deleteCar: (state, action) => {
            const {id} = action.payload;
            const index = state.cars.findIndex(car => car.id === id);
            state.cars.splice(index, 1);
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
            state.updateErrors = {};
            state.status = "Waiting for update"
        },
        updateCar: (state, action) => {
            const {newCar} = action.payload;
            const index = state.cars.findIndex(car => car.id === newCar.id);
            state.cars[index] = newCar;
            state.carForUpdate = null;
            state.status = "Success";
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload;
    //             state.status = 'fulfilled';
    //         })
    //         .addCase(getAll.pending, (state, action) => {
    //             state.status = 'pending';
    //         })
    //         .addCase(getAll.rejected, (state, action) => {
    //             state.status = 'rejected';
    //         })
    //         .addCase(createAsync.rejected, (state, action) => {
    //             const {status, formErrors} = action.payload;
    //             state.status = status;
    //             state.formErrors = formErrors;
    //         })
    // }
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = "pending";
        },
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload;
            state.status = "fulfilled";
        },
        [getAll.rejected]: (state) => {
            state.status = "rejected";
        },
        [createAsync.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors;
        },
        [getSingleCar.pending]: (state, action) => {
            state.singleCarError = null;
            state.singleCarStatus = action.payload;
        },
        [getSingleCar.fulfilled]: (state, action) => {
            state.singleCarError = null;
            state.singleCar = action.payload;
        },
        [getSingleCar.rejected]: (state, action) => {
            state.singleCarError = action.payload;
        },
        [updateCarById.rejected]: (state, action) => {
            const {status, updateErrors} = action.payload;
            state.status = status;
            state.updateErrors = updateErrors;
            state.carForUpdate = null;
        },
    }
});

const {reducer: carReducer, actions: {create, resetSingleCarError, deleteCar, setCarForUpdate, updateCar}} = carSlice;

const carActions = {
    getAll,
    createAsync,
    create,
    getSingleCar,
    resetSingleCarError,
    deleteCarById,
    deleteCar,
    updateCarById,
    setCarForUpdate
};

export {
    carReducer,
    carActions
};