const chior=[]; //乐队

// 只有会嘎嘎叫的才要 check（）
// 代码 流程 组成乐队 办事流程、
// js是动态类型语言区别于java
var duck={
    duckSing:function(){
        console.log('嘎嘎嘎');
    }


}
var chicken={
    chickSing:function(){
        console.log('咯咯咯');
    },
    duckSing:function(){
        console.log('嘎嘎嘎');
    }
}
// 走起来像鸭子，叫起来也像鸭子，那么他就是鸭子，duck
//  typing ja弱类型

/*

  功能 加入合唱团
  params:animal 动物对象
  chior加入合唱团
*/
// 1000只，999只duck、
function joinChior
(animal) {
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
// 现学 js 类 对象 ，动态的

chicken.duckSing=function(){
    console.log('嘎嘎嘎');
}
console.log(chior.length);
joinChior(chichen);

// 只有999只鸭子



