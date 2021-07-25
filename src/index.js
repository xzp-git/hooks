import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link  } from "./react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Login from "./components/Login";
import User from "./components/User";



ReactDOM.render(
<HashRouter>
<ul>
      <li><Link to="/">首页</Link></li>
      {/* <li><Link to={{pathname:`/user/detail/1`,state:{id:1,name:"张三"}}}>用户详情</Link></li>
      <li><Link to="/post/1">帖子</Link></li> */}
      <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/user" component={User} />
        <Protected path="/profile" component={Profile} />
        <Route path="/Login" component={Login} />
        <Redirect to="/" />
    </Switch>
</HashRouter>,

document.getElementById('root'))