var shallowCopy=function(obj){
    if(typeof obj!=='object') return;//退出条件

    var newObj=obj instanceof Array? []:{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){  //拷贝自身属性
            newObj[key]=obj[key];
        }
       
    }
    return newObj;
}
var arr=['old',1,true,[2,3]];
var new_arr=shallowCopy(arr);
new_arr[3][0]=4;
console.log(new_arr,arr)
//