// 手写代码，
Array.prototype.forEach = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('参数必需为函数');
    }
    // 方法作为对象的方法调用时，this指向当前对象
    let arr = this;
    if (!Array.isArray(arr)) {
      throw new Error('只能对数组用forEach方法');
    } 
  
    // forEach功能
    for (let index = 0; index < arr.length;index++ ) {
      fn(arr[index], index, arr);
    }
  
  
  }
  const arr = new Array(1,2,3);
  // arr.forEach(fu);
  // console.log(Array.prototype.forEach2);
  // [1,2,3].forEach2('abc');
  
  // 调用的方式
  arr.forEach(function(i, index) {
    // arguments
    console.log(arguments[1] == index);
    console.log(`第${index}遍历值为${i}`);  
  })
  