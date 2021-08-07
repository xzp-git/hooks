
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
        // 订阅方法会返回一个取消订阅的函数
        return () => {
            let index = listeners.indexOf(listener)
            listeners.splice(index,1)
        }
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