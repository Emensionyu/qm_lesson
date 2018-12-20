
// 1.进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
// 2。全局执行上下文初始化
// 3.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
// 4.checkscope 执行上下文初始化，创建变量对象、作用域链、this等
// 5.checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
// 6.执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
// 7.f 执行上下文初始化，创建变量对象、作用域链、this等
// 8.f 函数执行完毕，f 函数上下文从执行上下文栈中弹出
var scope ="global scope"
function checkscope(){
    var scope="local scope"
    // 上下文环境 AudioContext在创建时 形成了上下文环境 在环境中的自由变量 在调用时可以找到

    function f(){
        return scope;
    }
    return f;
}
var foo = checkscope();
console.log(foo());
fContext={
    Sscope:[AO,checkscope.AO,globalContext.VO]
}
checkscopeContext={
    Scope:[AO,globalContext.VO]

}