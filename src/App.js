import {useReducer} from "react";
import {Cats, Dogs, FormForAnimals} from "./components";
import {reducer} from "./reducers/AnimalReducer";

const init = (initialState) => {
    return {dogs: initialState, cats: initialState}
}

function App() {

    const [state, dispatch] = useReducer(reducer, [], init);

    return (
        <div>
            <FormForAnimals dispatch={dispatch}/>
            <hr/>
            <div>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
