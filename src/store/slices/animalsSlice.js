import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    cats: [],
    dogForUpdate: null,
    catForUpdate: null
}

const animalsSlice = createSlice({
    name: "animalsSlice",
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {dog: name} = action.payload;
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 0;
            state.dogs.push({name, id});
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload.id);
            state.dogs.splice(index, 1);
        },
        updateDog: (state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        resetDog: (state, action) => {
            const {dog} = action.payload;
            const number = state.dogs.findIndex(dog => dog.id === action.payload.dog.id);
            state.dogs[number] = dog;
            state.dogForUpdate = null;
        },
        addCat: (state, action) => {
            const {cat: name} = action.payload;
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 0;
            state.cats.push({name, id});
        },
        deleteCat: (state, action) => {
            const index = state.cats.findIndex(cat => cat.id === action.payload.id);
            state.cats.splice(index, 1);
        },
        updateCat: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },
        resetCat: (state, action) => {
            const {cat} = action.payload;
            const number = state.cats.findIndex(cat => cat.id === action.payload.cat.id);
            state.cats[number] = cat;
            state.catForUpdate = null;
        }
    }
});

const {reducer: animalsReducer, actions} = animalsSlice;

export default animalsReducer;
export const {addCat, addDog, deleteDog, updateDog, deleteCat, updateCat, resetCat, resetDog} = actions;