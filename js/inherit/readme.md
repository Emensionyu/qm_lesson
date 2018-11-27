1. js 本身没有类，处理基本数据类型外，只有对象。
将对象的prototype链，将对象的prototype指向要继承的对象
2. prototype是函数的属性，
3. 继承两步
- 父类的构造函数执行一下，相当于super()
- prototype属性指向父类的实例。
将prototype.constructor 指向构造函数

类 Parent 三部分 prototype是方法上的属性
1. 构造函数new Fn()会生成一个新的对象，this会指向这个对象
2. 构造函数有prototype属性，可以添加方法对象沿着原型链查找方法
3. 构造函数和原型链有关系
    Perent.prototype.constructor
- typrof 其实复杂数据类型只要求function和object是语法原生支持的，其他的
都只是变种而已
Function Vs Object
函数一等对象，区别在于函数可以被执行
函数可以被执行的对象
可以当做Object的构造函数。
- prototype属性只属于函数
        __proto__ 函数或方法都有私有属性
        一个对象A的 __proto__ 属性指向的那个对象B，B就是A的原型对象(父对象)，A拿到B里所有的属性和方法，以此递归，所谓原型链