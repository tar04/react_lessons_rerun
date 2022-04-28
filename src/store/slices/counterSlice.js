import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
    count2: 0
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        incCount1: state => {
            state.count1 += 1;
        },
        decCount1: state => {
            state.count1 -= 1;
        },
        reset1: (state, action) => {
            state.count1 = action.payload || 0;
        },
        incCount2: state => {
            state.count2 += 1;
        },
        decCount2: state => {
            state.count2 -= 1;
        },
        reset2: (state, action) => {
            state.count2 = action.payload || 0;
        }
    }
});

const {reducer: counterReducer, actions} = counterSlice

export default counterReducer;
export const {decCount1, incCount1, reset1, reset2, decCount2, incCount2} = actions;