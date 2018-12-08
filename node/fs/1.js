const fs=require('fs');//common js
try{
    // fs.readFile('./a.txt','utf8',
    // function(err,data){
    //     console.log(data);
    //     fs.readFile('./b.txt','utf8',function(err,data){
    //         console.log(data);
    //     })
    // })


    // const dataA=fs.readFileSync('./a.txt','utf8');
    // const datab=fs.readFileSync('./b.txt','utf8');
    // const datac=fs.readFileSync('./c.txt','utf8');
    const fileAPromise= new Promise((resolve,reject)=>{
        fs.readFile('./a.txt','utf8',function(err,data){
            if(err){
                reject()//reject 后 进入.catch()
            }else{
                resolve(data)//读取成功
            }
        })

    })
    const B=new Promise((resolve,reject)=>{
        fs.readFile('./b.txt','utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data)

            }

        })
    })
    // fileAPromise
    // .then(data=>{
    //     console.log(data);
    //     return B;
    // })
    // .then(data=>{
    //     console.log(data);
    // })//开始执行
    // .catch(err=>{
    //     console.log(err);
    // })
   Promise.all([fileAPromise,B])
   .then(response=>{
       console.log(response);
   })
   
   
}catch(e){
    console.log('读取文件失败'+e.message)
}
