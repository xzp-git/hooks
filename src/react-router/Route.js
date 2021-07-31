import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";
/* 
1.获取context中的值
2.匹配路由规则里的path是否和当前地址中的url地址是否相等
3.若果相等就渲染component 如果不相等就不渲染任何东西

*/

class Route extends React.Component {
    static contextType = RouterContext

    render(){
        const {history, location} = this.context
        const {component:RouteComponent, computedMatch, render, children} = this.props
        const match = computedMatch? computedMatch :matchPath(location.pathname, this.props)
        let renderElement = null
        let routeProps = {history, location}
        if (match) {
            routeProps.match = match  //路由属性 如果一个组件是Route渲染的 他们的routeProps = {}
            if (RouteComponent) {
                renderElement = <RouteComponent {...routeProps} />
            }else if (render) {
                renderElement = render(routeProps)
            }else if (children) {
                renderElement = children(routeProps)
            }
           
        }else{
            if (children) {
                renderElement = children(routeProps)
            }
        }
        return renderElement
    }
}

export default Route