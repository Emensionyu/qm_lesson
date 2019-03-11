function createIndexFinde(dir){
    return function(arr,func,context){
        var index=(dir>0)? 0:arr.length-1;
        for(;index>=0 && index<arr.length;index+=dir){
            if(func.call(context,arr[index],index,arr))
            return index; 
        }
        return -1;
    }
    
}
findIndex=createIndexFinde(1);
var result=findIndex([1,2,3,4],function(item,i,arr){
    return item==3;
})
console.log(result);