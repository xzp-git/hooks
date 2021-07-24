import React from "react";
import RouterContext from "./RouterContext";
import Lifecycle from "./Lifecycle";

function Redirect({to}) {
    return(
        <RouterContext.Consumer>
            {
                ({history}) =>(
                    <Lifecycle onMount={() => history.push(to)}></Lifecycle>
                )
            }
        </RouterContext.Consumer>
    )
}

export default Redirect