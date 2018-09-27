// var fs = require('fs');
// var data;
// try {
//     data=fs.readFileSync
// ('./fileForRead1.txt','utf8');
// console.log(data);
// } catch (err) {
//     console.error('读取文件出错：'+err.message);
// }
// function foo(){
//     console.log(this.a)

// }
// var obj={
//     a:2,
//  foo:foo
// }

// var s=obj.foo;
// s();
//s()不带任何修饰的函数调用
//-------------------------------
// {function foo(){
//     console.log(this.a)

// }
// var obj={
//     a:2,
//  foo:foo
// }
// function dofoo(fn){
//     fn();
// }
// dofoo(obj.foo);}

//---------------------------------
    // function foo(){
    //     console.log(this.a)
    
    // }
    // var obj={
    //     a:2,
    //  foo:foo
    // }
    // setTimeout(obj.foo,1000);
    //隐式绑定
//-------------------------------
    // var a=4;
    // function foo(a){
    //     this.a=a;
    // }
    // var bar=new foo(2);
    // console.log(bar.a);

//----------------------
//隐式绑定与new 绑定优先级比较
    function foo(something){
        this.a=something;
    }

    var obj1={
        foo:foo
    };
    var obj2={};
    obj1.foo(2);
    console.log(obj1.a);

    obj1.foo.call(obj2,3);
    console.log(obj2.a);

    var bar=new obj1.foo(4);
    console.log(obj1.a);
    console.log(bar.a);