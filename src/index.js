import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useParams,useLocation,useRouteMatch, useHistory  } from "react-router-dom";

const Home = () => <div> </div>

function UserDetail() {
    let params = useParams()
    console.log('params', params);
    let location = useLocation() //{pathname,state}
    console.log('location',location);
    let history = useHistory() //{pathname,state}
    console.log('location',history);

    return(
        <div>id:{params.id} name:{location.state.name}</div>
    )
}

function Post() {
    let match = useRouteMatch({
        path:'/post/:id',//匹配的路径
        strict:true, //是否严格匹配
        sensitive:true,//是否匹配的时候大小写敏感
    })
    return (
        match?<div>id:{match.params.id}</div>:<div>Not Found</div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to={{pathname:`/user/detail/1`,state:{id:1,name:'zhangsan'} }} >用户详情</Link> </li>
            <li><Link to="/post/1">帖子</Link></li>
        </ul>
        <Route path="/" component={Home} />
        <Route path="/user/detail/:id"  component={UserDetail}/>
        <Route path="/post/:id" component={Post} />
    </BrowserRouter>
,

document.getElementById('root'))