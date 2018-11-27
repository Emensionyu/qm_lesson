function Person(name){
    this.name=name;
}
let p=new Person('张三')
console.log(typeof Person)//function
console.log(typeof p)//object
console.log(Person.prototype)//Person {}
console.log(p.prototype)//undefined 属性只属于构造函数，对象上没有这个属性
console.log(Person.prototype.constructor)//[functoion:Person]
console.log(Person)//[functoion:Person]
console.log(Person.prototype.constructor===Person)//类本身
console.log('--------------------');
console.log(Person.__proto__);
console.log(p.__proto__);