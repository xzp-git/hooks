import React from "react";
import ReactReduxContext from "./reactReduxContext";

function Provider(props) {
    let value = {store:props.store}
    // Provider的下层组件都可以获取value
    return (
        <ReactReduxContext.Provider value={value}>
            {props.children}
        </ReactReduxContext.Provider>
    )
}

export default Provider