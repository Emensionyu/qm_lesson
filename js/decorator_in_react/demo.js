@testable 

class MyTestableClass{

}
function testable(target){
    //target 把函数装饰在哪个类上
    target.isTestable=true

}
console.log(MyTestableClass.isTestable);