const fs=require('fs');
const path=require('path')
var results2=[];
const getFilesInDir=function(dir){
    // var results=[path.resolve(dir)]
    var files=fs.readdirSync( dir,'utf8')//目录下所有目录或文件
    console.log(files);
    files.forEach(file=>{
        file=path.resolve(dir,file);
        //文件的信息
        const stats=fs.statSync(file);//该目录或文件状态
        if(stats.isFile()){
            results2.push(file);
        }else{
            // results=results.concat(getFilesInDir(file))
           getFilesInDir(file);

        }      
    })
    return results2           
}
const files=getFilesInDir('./src');
console.log(files);
