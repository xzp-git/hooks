import { createStore } from "./redux";

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

let containerValue = document.getElementById('container-value')

function render() {
    containerValue.innerHTML = store.getState().number
}
render()
store.subscribe(render)
let addBtn = document.getElementById('add-btn')

addBtn.addEventListener('click',() => {
    store.dispatch({type:ADD})
})

let minusBtn = document.getElementById('minus-btn')

minusBtn.addEventListener('click',() => {
    store.dispatch({type:MINUS})
})