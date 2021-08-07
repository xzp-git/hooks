import React from "react";
import store from "../store";
import { bindActionCreators } from "../redux";
import actions from "../store/actions/counter2";

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
class Counter2 extends React.Component{
    state = {number:store.getState().counter2.number}
    componentDidMount(){
        // 进行订阅

        this.unscbscribe = store.subscribe(() => {
            this.setState({number:store.getState().counter2.number})
        })
    }
    componentWillUnmount(){
        this.unscbscribe()
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={ boundActions.add2}>add2+</button>
                <button onClick={ boundActions.minus2}>minus2-</button>

            </div>
        )
    }
}

export default Counter2