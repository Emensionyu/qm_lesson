const Promise=require('./promise.js')
// const p=new Promise((resolve,reject)=>{
//     // console.log("哈哈哈")
//     setTimeout(()=>{
//         // console.log("哈哈哈")
//         resolve('aaa')
//     },2000)
  
//     })

//     p
//   .then((data)=>{
//       console.log(data);
//   },err=>{
//       console.log(err);
//   })
//   console.log('b');

const b=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('aaa')
        },2000)
})
b.then(data=>{
    console.log(data);
},err=>{console.log(err)})