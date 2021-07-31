import React from "react";
import { withRouter } from "../react-router";
function NavBar(props) {
    return (
        <h1 onClick={() => props.history.push('/')}>{props.title}</h1>
    )
}

export default withRouter(NavBar)