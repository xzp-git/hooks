import React from "react";
import { useDispatch, useSelector } from "../react-redux";

function Counter1() {
    let dispatch = useDispatch()
    let state = useSelector(state => state.counter1)
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => dispatch({type:'ADD1'})}>+</button>
            <button onClick={ () => dispatch({type:'MINUS1'})}>-</button>
        </div>
    )
}

export default Counter1