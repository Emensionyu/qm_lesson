function createIndexOfFinder(dir){
    return function(arr,item,idx){
        if(typeof idx=='number'){

            var length = array.length;
            var i = 0;
    
            if (typeof idx == "number") {
                if (dir > 0) {  //indexof查询 确定开始查询的下标
                    i = idx >= 0 ? idx : Math.max(length + idx, 0);
                }
                else {  //lastIndexof 确定正向查询，逆向查询的长度
                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                }
            }
            // if(dir>0){
            //     if(idx>0){
            //         i=idx;
            //     }else{
            //         i=arr.length+idx
            //         if(i<0)i=0
            //     }
            // }
            // else{
            //     if(idx>0){
            //         length=Math.min(idx+1,length)
            //     }else{
            //         length=idx+arr.length+1
            //     }
            // }
            for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){
                if(arr[idx]===item)
                return idx;
            }
                
            return -1
        }
    
    }
}
var indexOf = createIndexOfFinder(1);
console.log(indexOf[1,2,3,4,5],5,1)
var lastIndexOf = createIndexOfFinder(-1);