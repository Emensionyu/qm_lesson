const chior=[]; //乐队

// 只有会嘎嘎叫的才要 check（）
// 代码 流程 组成乐队 办事流程、
var duck={
    duckSing:function(){
        console.log('嘎嘎嘎');
    }


}

/*

  功能 加入合唱团
  params:animal 动物对象
  chior加入合唱团
*/
// 1000只，999只duck、
function joinChior(animal) {
    if (animal && typeof animal.duckSing=='function') {
        chior.push(animal);
    }else{
        console.log('不好意思');
    }
    

}
// 函数式编程，将编程目的分成一个或多个函数，取代行式编程
//达到封装目的
for(var i=0;i<999;i++){
    joinChior(duck);

}
console.log(chior.length);
joinChior();

var chicken={
    chickSing:function(){
        console.log('咯咯咯');
    }
}


