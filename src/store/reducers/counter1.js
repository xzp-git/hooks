import * as Types from "../actions-types"


/* 
这是counter1组件的对应的分reducer
他有自己独立的状态
*/
let initialState = {number:5}
const counter1 = (oldState=initialState, action) => {
    switch(action.type){ //判断动作的类型
        case Types.ADD1:
            return {number:oldState.number + 1} 
        case Types.MINUS1:
            return {number:oldState.number - 1} 
        default:
            return oldState
    }
}

export default counter1