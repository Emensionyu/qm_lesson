const fs = require('fs');
const path = require('path');
const dir = './src';

fs.readdir(dir, (err, files) => {
  // console.log(err);
  if (err) {
    console.error(err);
    return ;
  }
  files.forEach(file => {
    fs.stat(path.join(dir, file), (err, stat) => {
      console.log(stat.isFile());
    })
  })
});
