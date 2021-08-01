import React from "react";
import RouterContext from "./RouterContext";
import Lifecycle from "./Lifecycle";

/* 
when 布尔值表示要不要阻止跳转

message 他是一个函数，表示阻止的时候显示什么提示信息
*/

function Prompt({when, message}) {
    return(
        <RouterContext.Consumer>
            {
                value => {
                    if (!when) return null
                    const block = value.history.block
                    return (
                        <Lifecycle 
                        onMount={self=>{
                            self.replace = block(message)
                        }}
                        onUnmount={self => self.replace()}
                        ></Lifecycle>
                    )
                }
            }
        </RouterContext.Consumer>
    )
}

export default Prompt