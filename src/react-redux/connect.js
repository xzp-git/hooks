import React, {useContext} from "react";
import ReactReduxContext from "./ReactReduxContext";
import {bindActionCreators} from '../redux'
/* 
把组件和仓库进行关联
mapStateToProps 把仓库状态映射为属性
mapDispatchToProps 把store.dispatch方法映射为属性

*/
function connect(mapStateToprops,actions) {
    
    return function(OldComponent){
        function NewComponent(props){
            const value = useContext(ReactReduxContext)
            const store = value.store
            const state = store.getState() //获取仓库中的总状态
            const stateProps = mapStateToprops(state)
            let dispatchProps = bindActionCreators(actions,store.dispatch)
            return <OldComponent {...props}  {...stateProps} {...dispatchProps} />
        }
        return NewComponent
    }
}

export default connect