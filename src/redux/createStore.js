
/* 
reducer 处理器

preloadedState 仓库的初始状态
*/
function createStore(reducer, preloadedState) {
    // 
    let state = preloadedState

    function getState() {
        return state
    }
    
    const store = {
        getState
    }
    return store
}

export default createStore