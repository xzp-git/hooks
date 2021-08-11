import React, {useContext} from "react";
import ReactReduxContext from "./ReactReduxContext";
import {bindActionCreators} from '../redux'
/* 
把组件和仓库进行关联
mapStateToProps 把仓库状态映射为属性
mapDispatchToProps 把store.dispatch方法映射为属性
两条路或者说是两个方向
1.输入 把仓库中的状态或者 说传入组件，让组件可以显示 mapStateToprops
2.输出 可以让组件里的操作改变状态 actions
另外 为了让组件读取到最新的仓库中的状态，当仓库状态改变后，要通知组件刷新
*/
function connect(mapStateToprops,mapDispatchToProps) {
    
    return function(OldComponent){
        function NewComponent(props){
            const value = useContext(ReactReduxContext)
            const store = value.store
            const state = store.getState() //获取仓库中的总状态
            const stateProps = React.useMemo(() => {
                return mapStateToprops(state)
            },[state])

            // let dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
            // 优化
            let dispatchProps = React.useMemo(() => {
                let dispatchProps
                if (typeof mapDispatchToProps === 'object') {
                    dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
                }else if (typeof mapDispatchToProps === 'function') {
                    dispatchProps = mapDispatchToProps(store.dispatch);
                }else{
                    dispatchProps = {dispatch:store.dispatch}
                }
                return dispatchProps
            },[store.dispatch])
            // 调用upadateComponent的目的就是让状态改变，让组件更新
            // const [,updateComponent] = React.useReducer(() => {})
            const [,setState] = React.useState({})
            // 里面可以编写一个订阅，订阅仓库中的状态变化 事件，仓库的状态发生变化后可以调用foreceUpdate
            // 从而让组件进行刷新，为了保证只需要订阅一次，所以可以写个依赖项store
            React.useEffect(() => {
                let unsubscribe = store.subscribe(() => setState({}))
                return unsubscribe
            },[store])
            return <OldComponent {...props}  {...stateProps} {...dispatchProps} />
        }
        return NewComponent
    }
}

export default connect