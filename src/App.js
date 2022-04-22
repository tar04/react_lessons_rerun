import {useReducer} from "react";

import {Cats, Dogs, FormForAnimals} from "./components";
import {reducer} from "./reducers/AnimalReducer";

const init = (initialState) => {
    return {dogs: initialState, cats: initialState};
}

function App() {

    const [state, dispatch] = useReducer(reducer, [], init);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <FormForAnimals dispatch={dispatch}/>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly",marginTop:"40px"}}>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
