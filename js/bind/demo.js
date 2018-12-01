var foo={
    value:1
}
var obj={
    value:2
}
function bar(name,age){
    console.log(this.value)
}
var bindObj=bar.bind(obj)

//新函数
var bindFoo=bar.bind(foo);//函数调用
bindFoo();//新生的函数可以异步执行，this限定指定的对象
// console.log(typeof bindObj)
bindObj();
console.log(bindFoo)
bar.call(obj);
var bindFoo2=bar.call(foo);