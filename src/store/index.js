import {  createStore } from "../redux";

import rootReducer from "./reducers";
/* 
oldState 老状态

action 动作

*/

// 在创建仓库的时候不需要传递默认的状态了

// let store = createStore(rootReducer)

/* 
实现一个真正的日志中间件
*/
function applyMiddleware(middleware){
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer)
            let dispatch;//指向改造后的dispatch方法
            let middlewareAPI = {
                getState:store.getState,
                dispatch:(action) => dispatch(action)
            }
            dispatch = middleware(middlewareAPI)(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}

/* 
这是日志中间件的真正实现
*/
// function logger(store) {
//     return function (next) {
//         return function (action) {
//             console.log('pre state', store.getState())
//             next(action)
//             console.log('next state', store.getState());
//         }
//     }
// }


function middleware({getState, dispatch}) {
    return function (next) {
        return function (action) {
            console.log('pre state',getState())

            if (typeof action.then === 'function') {
                return action.then(newAction => dispatch(newAction))
            }else if (typeof action === 'function') {
                return action(dispatch,getState)
            }else{
                 next(action)
            }
        }
    }
}

let store = applyMiddleware(middleware)(createStore)(rootReducer)
export default store