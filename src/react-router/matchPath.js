import pathToRegexp from "path-to-regexp"
const cache = {}
function compilePath (path, options) {
    let cacheKey = path+JSON.stringify(options)
    if (cache[cacheKey]) return cache[cacheKey]
    const keys = [] //处理路径参数
    const regexp = pathToRegexp(path,keys,options)
    let result = {keys, regexp}
    cache[cacheKey] = result

    return result
}



function matchPath(pathname, options={}) {
    // path Route的路径
    // exact   是否精确匹配  后面能不能根子路径
    // strict   是否严格匹配 后面能不能有可选的
    // sensitive  是否是大小写敏感
    let {path='/', exact=false, strict=false,sensitive=false} = options

    let {keys, regexp} = compilePath(path, {end:exact, strict, sensitive})
    const match = regexp.exec(pathname)
    if (!match) {
        return null
    }
    const [url, ...values] = match
    const isExact = pathname === url

    // 如果要求精确，但不精确，也返回null
    if (exact && !isExact) {
        return null
    }

    return {
        path, //路径  来自route里的path路径
        url, //来自浏览器地址中的url
        isExact, //是否精确匹配
        params: keys.reduce((memo, key, index) => {  //{id:'100', name:'zhufeng'}
            memo[key.name] = values[index]
            return memo
        },{})
    }
}

export default matchPath