import * as Types from "../actions-types";


// 创建一个actionsCreator对象
const actions = {
     add2() {
        return {type:Types.ADD2}
    },
     minus2() {
        return {type:Types.MINUS2}
    }
}

export default actions