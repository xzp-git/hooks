import * as Types from "../actions-types";


// 创建一个actionsCreator对象
const actions = {
     add1() {
        return {type:Types.ADD1}
    },
     minus1() {
        return {type:Types.MINUS1}
    }
}

export default actions