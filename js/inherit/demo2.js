function Person(){
    this.names=['kevin','dasiy'];

}
// 1.this 永远跟函数运行的方式有关
function Child(){
    // 得到person的属性
    Person.call(this);
}
var child1=new Child();
console.log(Child.prototype);
var child2=new Child();
console.log(Person.prototype);
