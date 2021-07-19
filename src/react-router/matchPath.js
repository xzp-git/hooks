import pathToRegexp from "path-to-regexp"


function compilePath (path, options) {
    const keys = [] //处理路径参数
    const regexp = pathToRegexp(path,keys,options)

    return {keys, regexp}
}



function matchPath(pathname, options={}) {
    // path Route的路径
    // exact   是否精确匹配  后面能不能根子路径
    // strict   是否严格匹配 后面能不能有可选的
    // sensitive  是否是大小写敏感
    let {path='/', exact=false, strict=false,sensitive=false} = options

    compilePath(path, {end:exact, strict, sensitive})
    
}

export default matchPath