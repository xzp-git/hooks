

/* 
1.state的处理 自己维护state
2. 历史栈的维护 自己维护一个栈

*/
function createHashHistory() {

    let action
    let listeners = []
    let historyStack = []//历史栈
    let historyIndex = -1//栈指针
    let state;
    function listen(listener){
        listeners.push(listener)
        return () => {
            let idx = listeners.indexOf(listener)
            listeners.splice(idx,1) //从找到的位置删除一个
        }
    }
    window.addEventListener('hashchange',() => { 
        let pathname = window.location.hash.slice(1)

        //把新的action和pathname赋值给history.action
        Object.assign(history,{action,location:{pathname,state}})
        // debugger
        if (!action || action === 'PUSH') {
            historyStack[++historyIndex] = history.location
        }else if(action === 'REPLACE'){
            historyStack[historyIndex] = history.location
        }
        listeners.forEach(listener => listener(history.location))
    })
    function push(pathname, nextState) {

        action = 'PUSH'
        if (typeof pathname === 'object') {
            state = pathname.state
            pathname = pathname.pathname
        }else{
            state = nextState
        }
        // 给hash赋值的是不需要 加# 取得时候 带#
        window.location.hash = pathname
    }
    function replace(pathname, nextState) {

        action = 'REPLACE'
        if (typeof pathname === 'object') {
            state = pathname.state
            pathname = pathname.pathname
        }else{
            state = nextState
        }
        // 给hash赋值的是不需要 加# 取得时候 带#
        window.location.hash = pathname
    }
    function go(n) {
        action = 'POP'
        // debugger
        historyIndex += n
        let nextLocation = historyStack[historyIndex]
        state = nextLocation.state
        window.location.hash = nextLocation.pathname

    }
    function goBack() {
        go(-1)
    }

    function goForward() {
        go(1)
    }

    const history = {
        action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack  POP
        location:{pathname: '/',state:undefined},
        go,
        goBack,
        goForward,
        push,
        replace,
        listen
    }
    action = 'PUSH'
    window.location.hash = window.location.hash? window.location.hash.slice(1) : '/'
    return history
}










export default createHashHistory