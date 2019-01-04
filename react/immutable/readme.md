reactUI +redux(daat flow)
immutable(不可变数据)


reducer
    switch case
    default 
    return
只有一部分更新了，丢掉了之前没更新的大部分
，
深拷贝 浅拷贝
都为拷贝，规避js 复杂对象类型引用式赋值
引用赋值会让代码变得不可预测，不在单纯，出现二义性，
结合react reducer 纯函数，引入Immutable来确保专题太对象赋值后
是全新的对象，不会影响原对象
1. 浅拷贝
    slice()
    contact()
    但是解决不了非数组 如果是数组，最直接
    最原始for(key in)重新 赋值没有解决不了了

2. 拷贝的对象是嵌套对象 如果没有函数
JSON.parsr(JSON.stringfy())
3. 递归思想，讲一个深拷贝变为n个浅拷贝，当元素不为对象时退出 性能开销大
deepCopy
typoof(obj)!=='object' return；
var newObj=obj instnceof Array?[]:{}
for(key in obj)
if(obj.hasOwnProperty(key)){
    newObj[key]=typeof obj[key]==='object? deepCopy(onj[key]):obj[key]
}
return newObj

