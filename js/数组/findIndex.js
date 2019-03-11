// function isBigEnough(element) {
//     return element >= 15;
//   }
  
//   console.log([12, 5, 8, 130, 44].findIndex(isBigEnough));  // 3

function findIndex(arr,func,context){
    for(var i=0;i<arr.length;i++){
        if(func(arr[i],i,arr))
       
        return i;
    }
    return -1;

}
function findLastIndex(array, predicate, context) {
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (predicate.call(context, array[i], i, array)) return i;
    }
    return -1;
}



  console.log(findIndex([1, 2, 3, 4], function(item, i, array){
    if (item == 3) return true;
})) // 2