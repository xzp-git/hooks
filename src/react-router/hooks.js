import { useContext } from "react";
import { matchPath } from "./matchPath";
import RouterContext from "./RouterContext";

export function useParams() {
    return useContext(RouterContext).history
}

export function useLocation() {
    return useContext(RouterContext).location
}
export function useHistory() {
    let match = useContext(RouterContext).match
    return match? match.params:{}
}

// context value {history,location, match}
export function useRouteMatch(path) {
    let location = useLocation()
    let match = useContext(RouterContext).match //当前的match 来自于Privider
    return  path? matchPath(location.pathname, path):match
}