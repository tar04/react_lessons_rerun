import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

const reducers = combineReducers({
    counter:counterReducer,
    user:userReducer
});

const store = configureStore({
    reducer: reducers
});

export default store;