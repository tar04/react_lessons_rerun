import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    cats: [],
}

const animalsSlice = createSlice({
    name: "animalsSlice",
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {cat: name} = action.payload
            const [lastCat] = current(state.cats).slice(-1);
            const id = lastCat ? lastCat.id + 1 : 0;
            state.cats.push({name, id})
        },
        addDog: (state, action) => {
            const {dog: name} = action.payload
            const [lastDog] = current(state.dogs).slice(-1);
            const id = lastDog ? lastDog.id + 1 : 0;
            state.dogs.push({name, id});
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload.id)
            state.dogs.splice(index, 1)
        },
        updateDog: (state, action) => {

        },
        deleteCat: (state, action) => {

        },
        updateCat: (state, action) => {

        }

    }
});

const {reducer: animalsReducer, actions} = animalsSlice

export default animalsReducer;
export const {addCat, addDog, deleteDog, updateDog, deleteCat, updateCat} = actions;