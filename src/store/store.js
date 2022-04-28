import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animalsReducer from "./slices/animalsSlice";


const reducers = combineReducers({
    animalsReducer
});

const store = configureStore({
    reducer: reducers
});

export default store;