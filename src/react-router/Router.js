import React from "react";
import RouterContext from "./RouterContext";
class Router extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            location:props.history.location
        }
        // 监听历史对象中的路径变化，当路径发生变化后执行回调函数，参数就是罪行的路径对象
        this.unlisten = props.history.listen(location => {
            this.setState({location})
        })
    }
    componentWillUnmount(){
        this.unlisten()
    }
    render(){
        let value = {
            location:this.state.location, //用来传递给route用来判断路由是否匹配的
            history:this.props.history
        }
        return(
            <RouterContext.Provider value={value}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}


export default Router