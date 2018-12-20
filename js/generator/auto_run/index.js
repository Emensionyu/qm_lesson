 var fetch =require('node-fetch');
 function *gen(){
     var url='http://api.github.com/users/github';
    var result= yield fetch(url);
    console.log(result.bio);
 }
 var g=gen();
 var result = g.next();
 console.log(result);
// console.log(g.next());
//  console.log(g.next({bio:'哈哈哈哈'}));//左边next传值
//  console.log(g.next());
result.value.then(function(data){
    return data.json();
}) .then(data=>{
// console.log(data);
console.log(g.next(data));
})

