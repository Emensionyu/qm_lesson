// const game=new Pharser.Game();
// Phaser 命名空间 JSON object为了不污染js命名空间
const Phaser={};
Phaser.Game=function(w,h,type,ele,options){
//     匿名函数 函数被new运行 构造函数
console.log('构造函数');
this.width=w;
this.height=h;

}
let zombiegame=new Phaser.Game(800,600);
console.log(zombiegame.width,zombiegame.height);
