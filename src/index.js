import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "./react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";



ReactDOM.render(
<Router>
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
    </Switch>
</Router>,

document.getElementById('root'))