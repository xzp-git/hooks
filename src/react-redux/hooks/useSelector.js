import React from "react";
import ReactReduxContext from "../ReactReduxContext";


function useSelectorWithStore(selector,store) {
    let state = store.getState()
    let selectedState = selector(state)
    const [,forceUpdate] = React.useReducer(x => x+1,0)
    React.useEffect(() => {
        return store.subscribe(forceUpdate)
    })
    return selectedState
}

function useSelector(selector) {
    const {store} = React.useContext(ReactReduxContext)
    const selectedState = useSelectorWithStore(selector,store)
    return selectedState
}

export default useSelector