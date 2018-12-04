var fileFinder=require('./demo1.js');
fileFinder('./src',function(err,filename){
    if(err){
      return  console.log(err)
    }
    console.log(filename);
});
// console.log(fileFinder);
// 1.cb 
// 2. then 
// 3. await
// 4. generate
// 5. error处理