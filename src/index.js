import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect  } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";



ReactDOM.render(
<HashRouter>
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
    </Switch>
</HashRouter>,

document.getElementById('root'))