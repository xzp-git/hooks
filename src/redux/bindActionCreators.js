
function bindActionCreator(actionCreator,dispatch) {
    return function (...args) {
        return  dispatch(actionCreator.apply(this,args))
    }
}



/* 
绑定action创建者 和store.dispatch方法
actionCreators const actions = {add, minus}
dispatch   store.dispatch
*/

function bindActionCreators(actionCreators,dispatch) {
    const boundActionCreators = {}

    for (const key in actionCreators) {
            const actionCreator = actionCreators[key];
            boundActionCreators[key] = bindActionCreator(actionCreator,dispatch)
    }
    return boundActionCreators
} 

export default bindActionCreators