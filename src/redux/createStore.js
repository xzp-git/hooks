
/* 
reducer 处理器

preloadedState 仓库的初始状态
*/
function createStore(reducer, preloadedState) {
    // 
    let state = preloadedState
    let listeners = []
    function getState() {
        return state
    }

    function subscribe(listener) {
        listeners.push(listener)
    }

    // action 动作
    function dispatch(action) {
        state=reducer(state,action)
        listeners.forEach(l => l())
        return action
    }
    
    const store = {
        getState,
        subscribe,
        dispatch
    }
    return store
}

export default createStore