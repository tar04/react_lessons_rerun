import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        add: (state, action) => {
            const {user} = action.payload;
            state.users.push({id: new Date().getTime(), name: user})
        }
    }
});

const {actions, reducer: userReducer} = userSlice;

export default userReducer;

export const {add} = actions;