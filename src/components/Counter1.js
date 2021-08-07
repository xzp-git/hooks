import React from "react";
import store from "../store";
import { bindActionCreators } from "../redux";
import actions from "../store/actions/counter1";

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
    state = {number:store.getState().counter1.number}
    componentDidMount(){
        // 进行订阅

        this.unscbscribe = store.subscribe(() => {
            this.setState({number:store.getState().counter1.number})
        })
    }
    componentWillUnmount(){
        this.unscbscribe()
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.add1}>+</button>
                <button onClick={ boundActions.minus1}>-</button>

            </div>
        )
    }
}

export default Counter1