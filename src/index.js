import { createStore } from "./redux/index.js";

const ADD = 'ADD'

const MINUS = 'MINUS'
/* 
oldState 老状态

action 动作

*/
const reducer = (oldState, action) => {
    switch(action.type){ //判断动作的类型
        case ADD:
            return {number:oldState.number + 1} 
        case MINUS:
            return {number:oldState.number - 1} 
        default:
            return oldState
    }
}

let store = createStore(reducer,{number:0})

console.log(store.getState());
// store.dispatch({type:ADD})