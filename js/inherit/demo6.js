let A={name:'mensionyu'};//JSON Object
let B={age:19};
let C={hobby:"啊哈哈"};
A.__proto__=B;//原型对象
B.__proto__=C;
console.log(A.name,A.age,A.hobby);

console.log(A.__proto__)
console.log(B.__proto__)
console.log(C.__proto__)


