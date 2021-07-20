import React from "react";

import {Router} from "../react-router";

import { createHashHistory } from "../components/history";



// 创建一个hash history 对象的方法  模拟了一个自己的history 但是使用hash实现的

class HashRouter extends React.Component{
    history = createHashHistory()
    render(){
   

        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}


export default HashRouter