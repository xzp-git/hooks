

/* 
reducers reducer对象
把进来的对象 转换成一个reducer函数
reducers = {
    counter1,
    counter2
}
state = {
    counter1:{},
    counter2:{}
}

*/

function combineReducers(reducers) {
    
    // 返回的函数就是最终的根reducer
    let rootReducer = (state={},action) => {
        let nextState = {}
        for (const key in reducers) {
            const reducer = reducers[key] // 分reducer
            const previousStateForKey = state[key] //老的分状态
            const nextStateForKey = reducer(previousStateForKey,action) //计算新的分状态
            nextState[key] = nextStateForKey
        }
        return nextState
    }
    return rootReducer
}

export default combineReducers