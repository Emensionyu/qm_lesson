function Parent() {
    this.name = 'kevin';
  }
  // 原型链对象 { } prototype? 任何函数都
  // 可以有的属性
  Parent.prototype.getName = function() {
    console.log(this.name);
  }
  
  // 原型链继承
  function Child () {
  }
  Child.prototype = new Parent();
  var child1 = new Child();
  // child1.names.push('yayu');
  child1.getName();
  console.log(child1.getName());
  