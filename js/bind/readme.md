1. this 由函数调用方式决定
    普通函数 对象的方法 事件处理函数 闭包

2. this的作用域手动指定
call apply 区别是参数，call逗号序列 apply数组
bind 可以实现延后执行 call和apply立马执行
bind 可以实现延后执行 返回一个新函数，并且内部的this指定为第一个参数

手写bind
Function.prototype.bind=

3. bind 是展示this 闭包 函数式编程 原型链最直接的例子
this：
-  apply
手动指定函数的执行中的this为第一个参数
    bind是基于apply手动指定this为绑定对象的
- 闭包区域
    this 由调用方式决定为被绑定的函数this self=this 在闭合空间一直存在
2. 闭包 
函数嵌套函数 闭包中的变量一直可以被访问
3. 函数式编程
    bind 返回一个新函数，解决了事件函数的this丢失 一般的事件listen this指向了事件对象 target
    在react 组件式开发或者是面向对象有需求，将事件的处理函数作为组件类的方法，即延迟调用，同时手动指定this
    apply+函数式
    return function(){
        self.apply(context)
    }
4. 原型链
Function.prototype.bind
