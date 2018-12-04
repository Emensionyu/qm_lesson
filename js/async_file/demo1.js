var fs = require('fs');
var path = require('path')

var findLargest = (dir, cb) => {
  // console.log(dir);
  fs.readdir(dir, (err, files) => {
    if (err) {
      return cb(err);
      // dir 不存在 怎么处理？ 
      //  要告诉cb
    }
    // 找到最大文件？ 算法
    // [] 所有文件大小，最大的一个
    var counter = files.length;
    var errored = false;  //未出错
    var stats = [];
    files.forEach((file, index) => {
      fs.stat(path.join(dir, file), (err, stat) => {
        // 文件循环处理，有先有后
        if (errored) return; 
        if (err) {
          errored = true;
          return cb(err);
        } 
        stats[index] = stat;
        if (--counter == 0) {
          // 什么时候文件stat都获取完？
         //? 谁最大？
          var largest = stats
            .filter(stat => stat.isFile())
            .reduce((prev, next) => {
              if (prev.size > next.size) return prev;
              return next;
            })

          cb(null, files[stats.indexOf(largest)]);
        }
      });
    })
    // 什么时候是个尽头？ 拿到所有文件的stat 
    // 异步

    // 遍历文件时， 文件打开失败
  });
}

module.exports = findLargest;
