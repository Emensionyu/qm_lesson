//深拷贝 对于嵌套式结构对象
var arr=[{old:'old'},['old']];
console.log(typeof(arr));
var new_arr=JSON.parse(JSON.stringify(arr))//将对象字符串化 类型改变了
console.log(typeof(new_arr)); //object对象
new_arr[0].old='new';
new_arr[1][0]='new';

//深浅自知，浅拷贝有他的引用场景 更高效 性能好。

console.log(new_arr,arr)
//
