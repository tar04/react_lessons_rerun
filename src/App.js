import {useReducer} from "react";

const init = (initState) => {
    return {count1: initState, count2: initState, count3: initState}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}
        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>
                <h2>First counter: {state.count1}</h2>
                <button onClick={() => dispatch({type: "inc"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec"})}>Dec</button>
                <button onClick={() => dispatch({type: "reset", payload: 0})}>Reset</button>
            </div>
            <div>
                <h2>Second counter: {state.count2}</h2>
                <button onClick={() => dispatch({type: "inc2"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec2"})}>Dec</button>
                <button onClick={() => dispatch({type: "reset2", payload: 0})}>Reset</button>
            </div>
            <div>
                <h2>Third counter: {state.count3}</h2>
                <button onClick={() => dispatch({type: "inc3"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec3"})}>Dec</button>
                <button onClick={() => dispatch({type: "reset3", payload: 0})}>Reset</button>
            </div>
        </div>
    );
}

export default App;
