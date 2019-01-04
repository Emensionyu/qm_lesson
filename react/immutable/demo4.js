var arr=[function(){
    console.log(a)
},{
    b:function(){
        console.log(b);
    }
}]
//parse用于从一个字符串中解析出json对象
//深拷贝第二层
var new_arr=JSON.parse(JSON.stringify(arr));//[ null, {} ] 函数在字符串 序列化后变为null
console.log(typeof(new_arr))
console.log(new_arr);
// JSON两个方法 对非函数子元素，可进行深拷贝
// ，性能开销比浅拷贝略大