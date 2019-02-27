const _=require('underscore');

var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]

//------------------toString实现
// function flatten(arr){
//     var  newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(toString.call(arr[i])!="[object Array]"){
//             newarr.push(arr[i])
//         }
//         else{
//             newarr=newarr.concat(flatten(arr[i]));
//         }
//     }
//     return newarr;
// }

//---------------reducer实现-------------------
// function flatten(arr){
//    return arr.reduce(function(a,b){
//         return a.concat(Array.isArray(b)?flatten(b):b)
        
//     },[])
// }

// console.log(flatten(arr))
//-------------数组求和
// arr=[1,2,3,3,4,5]
// console.log(arr.reduce(function(prev,next){
// return prev+next
// },0))
//-------------数组去重
// console.log(arr.reduce(function(prev,cur){
//     if(prev.indexOf(cur)==-1){
//         return prev.concat(cur)
//     }else{
//         return prev
//     }
    
// },[]))
//-------------数组统计次数
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// let namenumber=names.reduce(function(pre,cur){
//     if(cur in pre){
//         pre[cur]++
//     }else{
//         pre[cur]=1;
//     }
//     return pre
// },{})
// console.log(namenumber);
//---------------reducer实现-------------------

//---------------------扩展运算符实现flatten
// function flatten(arr){
//     while(arr.some(item=>Array.isArray(item))){
//         arr=[].concat(...arr);
//     }
//     return arr;
// }
//------------------underscore------
// function flatten(arr)
_.flatten=function(arr,shallow){
    return flatten(arr,shallow,false);
}
console.log(_.flatten(arr,false))
function flatten(input,shallow,strict,output){
    // 递归使用的时候会用到output
    output = output || [];
    var idx = output.length;
    for(var i=0;i<input.length;i++){
        var value=input[i];
        if(Array.isArray(value)){
            if(shallow)      //只进行一层扁平操作
            for(j=0;j<value.length;j++){
                output[idx++]=value[j++]
            }
            else{           //递归扁平，数据放到output里
                flatten(value,shallow,strict,output);
                idx=output.length;
            }
        }
        else if(!strict){   //是跳过不处理还是放入输出数组中
            output[idx++] = value; 
        }
    }
    return output

}
