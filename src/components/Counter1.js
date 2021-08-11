import React from "react";
// import store from "../store";
// import { bindActionCreators } from "../redux";
import actions from "../store/actions/counter1";
import { connect } from "../react-redux";

// 绑定actionsCreator
// const boundActions = bindActionCreators(actions,store.dispatch)
/*  boundActions   =>       {
    function boundAdd(){
        return dispatch(add())
    },
    function boundMinus(){
        return dispatch(minus())
    },     
} */
class Counter1 extends React.Component{
    // state = {number:store.getState().counter1.number}
    // componentDidMount(){
    //     // 进行订阅

    //     this.unscbscribe = store.subscribe(() => {
    //         this.setState({number:store.getState().counter1.number})
    //     })
    // }
    // componentWillUnmount(){
    //     this.unscbscribe()
    // }
    
    render(){
        const {number} = this.props
        return (
            <div>
                <p>{number}</p>
                <button onClick={this.props.add1}>+</button>
                <button onClick={ this.props.minus1}>-</button>
            </div>
        )
    }
}
// 这是一个映射函数，可以把仓库的状态进行映射出来分状态，分状态会成为组件属性对象
let mapStateToProps = state => state.counter1
export default connect(mapStateToProps,actions)(Counter1)


/*
connect 负责把仓库和组件进行关联
通过 Context 获取sto
*/