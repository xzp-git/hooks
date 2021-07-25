import { HashRouter, Route, Switch, Redirect, Link  } from "../react-router-dom";


const Protected = (props) => {
    let {path, component:RouteComponent} = props
    return (
        <Route path={path} render = {
            (routeProps) => {
              return ( localStorage.getItem('login')?<RouteComponent {...routeProps} />:<Redirect to={{pathname:'/login', state:{from:path}}} />)
              
            }
        } />
    )
}

export default Protected


/* 
指定一个Route组件要渲染的内容

有三种方式

1. component 属性 值是一个组件的类型 他不能写定义的逻辑
2.  render、属性 他是一个函数，如果路径匹配的话，就要渲染他这个函数的返回值
3. children 属性 他也是一个函数

*/