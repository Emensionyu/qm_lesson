const fs=require('fs');
const path=require('path')
  getFilesInDir=(function(src){
    var files=fs.readdirSync(src)
    var results=path.resolve(src);
    files.forEach(file=>{
        // console.log(file);
        file=path.resolve('./src',file);
        console.log(file);
        // console.log(path.resolve(file))
        // console.log(file);
        var state=fs.statSync(file);
        if(state.isFile()){
            results.push(file);
        } else{
            results=results.concat(getFilesInDir(file))
        }
        console.log(results);
    })

})('./src')
console.log( getFilesInDir);

// console.log(files);
// console.log(path.resolve('./s))


// var statInfo = fs.statSync('a.txt');
// console.log(statInfo);