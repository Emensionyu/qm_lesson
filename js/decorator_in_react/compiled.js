var _class;

let MyTestableClass = testable(_class = class MyTestableClass {}) || _class;

function testable(target) {
  //target 把函数装饰在哪个类上
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable);
