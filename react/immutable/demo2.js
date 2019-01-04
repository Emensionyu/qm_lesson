// import { isImmutable } from "immutable";

var arr=['old',1,true,null,undefined];
console.log(typeof(arr));
var new_arr=arr.concat();
//  .slice() .contact() 数组里少数返回新数组的方法 **会生成一个新的数据对象**
//这种用法成为浅拷贝
new_arr[0]="new"
console.log(new_arr,arr);
// 不可预测new_arr的值 如果arr或new一方修改 都会受到影响 不要用
// js bad parts

// Immutable  不可变数据 让未来可知
// reducer 纯函数