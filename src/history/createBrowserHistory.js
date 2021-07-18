


function createBrowserHistory() {

    const globalHistory = window.history
    // (function (history) {
    //     let oldPushState = history.pushState
    //     history.pushState = function (pathname,state) {
    //         let result = oldPushState.apply(history,arguments)
    //         if (typeof  window.onpushstate) {
    //             window.onpushstate(new CustomEvent('pushstate',{detail:{pathname,state}}));
    //         }
    //         return result
    //     }
    // })(globalHistory)
    let listeners = []
    let action 
    let state
    function go(n) {
        globalHistory.go(n)
    }

    function goBack() {
        globalHistory.go(-1)
    }

    function goForward() {
        globalHistory.go(1)
    }

    function listen(listener){
        listeners.push(listener)
        return () => {
            let idx = listeners.indexOf(listener)
            listeners.splice(idx,1) //从找到的位置删除一个
        }
    }
    function push(pathname, nextState) {
        action = 'PUSH'
        if (typeof pathname === 'object') {
            state = pathname.state
            pathname = pathname.pathname
        }else{
            state = nextState
        }
        globalHistory.pushState(state,null,pathname)
        let location = {
            state,
            pathname
        }
        setState({action, location})
    }
    function setState(newState) {
        Object.assign(history,newState)
        listeners.forEach(listener => listener(history.location))
    }
    //当你调用pushState 的时候，会执行这个回调函数   此功能浏览器是不支持的 需要我们自己处理
    // window.onpushstate = (event) => {

    // }
    //当你回退或前进的时候会执行  这个监听 是浏览器自带的 默认支持的
    window.onpopstate = (event) => {
        setState({action:'POP',location:{pathname: window.location.pathname,state:globalHistory.state}})
    }
    const history = {
        action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack  POP
        location:{pathname: window.location.pathname,state:globalHistory.state},
        go,
        goBack,
        goForward,
        push,
        listen
    }

    return history
}










export default createBrowserHistory