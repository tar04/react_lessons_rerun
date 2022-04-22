import {useReducer} from "react";
import {Cats, Dogs, FormForAnimals} from "./components";

// const init = (initialState) => {
//     return {dogs: initialState, cats: initialState}
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]}
        case 'delDog':
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload]}
        case 'delCat':
        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {dogs: [], cats: []});

    return (
        <div>
            <FormForAnimals/>
            <hr/>
            <div>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
