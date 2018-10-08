var myDate=new Date();
console.log(myDate.getTime());
console.log(myDate instanceof Date);
console.log(typeof myDate);
console.log(Object.prototype.toString.call(myDate));


var s="i an a string";
console.log(s instanceof String);
console.log(typeof s);
console.log(Object.prototype.toString.call(s));

var s1=new String("i an a string");
console.log(s1 instanceof String);
console.log(typeof s1);
console.log(Object.prototype.toString.call(s1));

console.log("[object object]");