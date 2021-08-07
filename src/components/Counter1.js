import React from "react";

import { bindActionCreators, createStore } from "redux";


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

let store = createStore(reducer,{number:10})

function add() {
    return {type:ADD}
}
function minus() {
    return {type:MINUS}
}
// 创建一个actionsCreator对象
const actions = {add, minus}
// 绑定actionsCreator
const boundActions = bindActionCreators(actions,store.dispatch)
/*  boundActions   =>       {
    function boundAdd(){
        return dispatch(add())
    },
    function boundMinus(){
        return dispatch(minus())
    },     
} */
class Counter1 extends React.Component{
    state = {number:store.getState().number}
    componentDidMount(){
        // 进行订阅

        this.unscbscribe = store.subscribe(() => {
            this.setState({number:store.getState().number})
        })
    }
    componentWillUnmount(){
        this.unscbscribe()
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={() => boundActions.add}>+</button>
                <button onClick={() => boundActions.minus}>-</button>

            </div>
        )
    }
}

export default Counter1