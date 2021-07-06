

function createHashHistory() {

    let action
    function push(pathname) {
        
    }
    
    function goBack(params) {
        go(-1)
    }

    function goForward(params) {
        go(1)
    }

    const history = {
        action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack  POP
        location:{pathname:'/',state:undefined},
        go,
        goBack,
        goForward,
        push,
        listen
    }
    
    return history
}










export default createHashHistory