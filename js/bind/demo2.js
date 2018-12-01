Function.prototype.bind2=function(context){
    // console.log('bind2')
    //1. 返回被绑的函数
    //2. 新函数在运行的时候this指向 context
    // 调用bind2的函数foo？
     var self=this;
     var args=Array.prototype.slice.call(arguments,1);
    return function(){
        var bindArgs=Array.prototype.slice.call(arguments)
       self.apply(context,args.concat(bindArgs))
       //手动指定
    }
}
var obj={
    val:1
}

const foo=function(name,age){
    console.log(this.val);
    console.log(name);
    console.log(age);
}
foo.bind2();
const fooBar=foo.bind2(obj,'daisy');//对象上调用方法，this指向该函数对象
fooBar(18);