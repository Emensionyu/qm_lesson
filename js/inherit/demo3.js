function Parent (name){
    this.name=name;
    this.colors=['red','blue','green'];

}
Parent.prototype.getName=function(){
    console.log(this.name)

}
function Child(name,age){
    Parent.call(this,name);//==super()
    this.age=age;
}
Child.prototype=new Parent();
Child.prototype.constructor=Child
// var child1=new Person("jjj")
// console.log(child1)
Child.prototype.sayHello=function()
{
    console.log(`${this.name} +${this.age}`)
}
var child1=new Child('kevin','18');
console.log(child1)
child1.colors.push('black');
child1.getName();

child1.sayHello();
// console.log(Parent.prototype.constructor)
console.log(Child.prototype.constructor)
console.log(Child.prototype);
console.log(Parent.prototype);
