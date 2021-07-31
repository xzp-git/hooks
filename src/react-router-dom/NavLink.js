import React from "react";
import Link  from "./Link";
import { RouterContext, matchPatch,Route } from "../react-router";

function NavLink(props) {

    const {
        to,
        className:classNameProp = '',
        style:styleProp = {},
        activeClassName = '',
        activeStyle={},
        children,
        exact
    } = props
    return (
        <Route path={to} exact={exact} children={
            (routeProps) => {
                let match = routeProps.match
                let className = match? joinClassname(classNameProp,activeClassName) : classNameProp
                let style = match? {...styleProp, ...activeStyle}:styleProp
                let linkProps = {
                    className,
                    style,
                    to,
                    children
                }
                return (
                    <Link {...linkProps} />
                )
            }
        } />
    )
}

// 源码实现  并没有用到children
function NavLink2(props) {
    let context = React.useContext(RouterContext)

    let {pathname} = context.location
    const {
        to,
        className:classNameProp = '',
        style:styleProp = {},
        activeClassName = '',
        activeStyle={},
        children,
        exact
    } = props
    // 匹配当前的路径 和自己的路径是否匹配
    let isActive = matchPatch(pathname,{path:to,exact})
    let className = isActive? joinClassname(classNameProp,activeClassName) : classNameProp
    let style = isActive? {...styleProp, ...activeStyle}:styleProp
    let linkProps = {
        className,
        style,
        to,
        children
    }
    return (
        <Link {...linkProps} />
    )
}

function joinClassname(...classNames) {
    return classNames.filter(c => c).join(' ')
}

export default NavLink