let pathToRegExp = require('path-to-regexp')
let regxp = pathToRegExp('/home', [], {end:true})
console.log(regxp);

//匹配分组捕获

// console.log('1ab'.match(/1([a-z])([a-z])/));
// // 非捕获分组
// console.log('1ab'.match(/1(?:[a-z])([a-z])/))
// // 正向肯定前瞻 并不消耗字符
// console.log('1ab'.match(/\d(?=[a-z])[a-z]/))
// // 正向否定前瞻  1后面不是
// console.log('1ab'.match(/\d(?![A-Z])[a-z]/))
// // 反向肯定后瞻  
// console.log('A1ab'.match(/(?<=[A-Z])\d[a-z]/))

// // 反向肯定后瞻  
// console.log('A1ab'.match(/(?<![A-Z])\d[a-z]/))