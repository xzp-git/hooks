

function createHashHistory() {

    let action
    let listeners = []
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
        Object.assign(history,{action,location:{pathname}})
        listeners.forEach(listener => listener(history.location))
    })
    function push(pathname) {
        action = 'PUSH'
        // 给hash赋值的是不需要 加# 取得时候 带#
        window.location.hash = pathname
    }
    function go() {
        
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
        listen
    }
    window.location.hash = window.location.hash? window.location.hash.slice(1) : '/'
    return history
}










export default createHashHistory