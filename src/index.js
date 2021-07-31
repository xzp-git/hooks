import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, NavLink  } from "./react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Login from "./components/Login";
import User from "./components/User";
import NavBar from "./components/NavBar";



ReactDOM.render(
<HashRouter>
<NavBar title="返回首页" />
<ul>
      <li><NavLink 
      className="baseClass" 
      style={{textDecoration:'line-through'}}
      activeStyle={{color:'red'}}
      activeClassName="strong"
      exact={true}
       to="/">首页</NavLink></li>
      
      <li><NavLink 
      className="baseClass" 
      style={{textDecoration:'line-through'}}
      activeStyle={{color:'red'}}
      activeClassName="strong"
      exact={true}
       to="/user">用户中心</NavLink></li>
      <li> 
      <NavLink 
      className="baseClass" 
      style={{textDecoration:'line-through'}}
      activeStyle={{color:'red'}}
      activeClassName="strong"
       to="/profile">个人中心</NavLink>
      </li>
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