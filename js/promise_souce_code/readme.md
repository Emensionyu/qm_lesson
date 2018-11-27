-手写promoise A+规范

js 回调 解决异步 出现了倒金字塔回调地域
Promise A+规范
一个类，构造函数  resolve reject？
返回就是promise实例 then 方法 
1. promise 将executor 封装在构造函数内部，
并提供 resolve reject 两个函数给executor到时候回调
2. then 是同步的，跟promise 构造函数一样，属于语法的一方面，
将onResolveFullfulled onReject封装起来。并与this绑定
3. executor 高阶函数 才是真正的主战场，负责 this.status this.reason this.value 的处理