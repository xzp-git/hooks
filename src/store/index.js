import {  createStore } from "../redux";

import rootReducer from "./reducers";
/* 
oldState 老状态

action 动作

*/

// 在创建仓库的时候不需要传递默认的状态了

let store = createStore(rootReducer)

export default store