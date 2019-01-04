const Immutable=require('immutable');
let obj1=Immutable.Map({a:1,b:2,c:3})//Immutable后是不可变数据
//数据是Immutable 数据结构map
//prevState
let obj2=obj1;//nextState
obj2=obj2.set("b",4);
console.log(obj2)
obj2=obj2.set("b",9);
console.log(obj2,obj1)
console.log(obj1===obj2)
//传统的引用式赋值不行，深浅拷贝来处理 reducer
// 不用太大阵仗 改变其中某个值 
