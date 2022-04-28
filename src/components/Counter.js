import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decCount1, decCount2, incCount1, incCount2, reset1, reset2} from "../store";

const Counter = () => {

    const {count1, count2} = useSelector(state => state["counter"]);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count1: {count1}</h1>
            <button onClick={() => dispatch(incCount1())}>Inc</button>
            <button onClick={() => dispatch(decCount1())}>Dec</button>
            <button onClick={() => dispatch(reset1())}>Reset</button>
            <h1>Count2: {count2}</h1>
            <button onClick={() => dispatch(incCount2())}>Inc</button>
            <button onClick={() => dispatch(decCount2())}>Dec</button>
            <button onClick={() => dispatch(reset2())}>Reset</button>
        </div>
    );
};

export default Counter;