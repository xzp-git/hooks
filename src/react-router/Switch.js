import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";
class Switch extends React.Component{
    static contextType = RouterContext
    render () {
        const {location} = this.context
        let element,match;
        React.Children.forEach(this.props.children,child =>{
           if (!match) { //如果还没有任何医德元素匹配上
                match =  matchPath(location.pathname, child.peops)
                element = child   
           }
        })
        return match? React.cloneElement(element,{computedMatch:match}) : null 
    } 
}

export default Switch