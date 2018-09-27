1.   js是事件驱动语言
2. 回调函数
    event 事件对象
    this  指向事件发生的元素


    box-shadow有6个可设的值
box-shadow:阴影类型 X轴位移 Y轴位移 阴影大小 阴影扩展 阴影颜色
注意：当不设阴影类型的时候，默认是投影效果。当设为inset时，为内阴影效果
注意：负数为水平为左边，负数垂直为上
注意：阴影大小、扩展、颜色和ps同理

例子  自己玩玩 不截图了
（1）投影，没有位移，没有扩展，有阴影，有阴影色彩
img{box-shadow:0 0 10px #ccc}
（2）投影，没有位移，有扩展，有阴影，有阴影色彩
img{box-shadow:0 0 10px 20px #ccc}
（3）内阴影，无位移，10px大小，没有扩展，有阴影色彩
img{box-shadow:inset 0 0 10px #ccc}
（4）多重阴影效果
img{box-shadow:-10px 0 10px red,box-shadow:10px 0 10px blue,box-shadow:0 -10px 10px yellow,box-shadow:0 10px 10px #ccc}
（5）使用多个阴影属性的顺序问题
img{box-shadow:0 0 10px green;box-shadow: 0 0 10px 20px yellow}
注意：先写的阴影显示在最里面，第二个阴影则显示在外面
注意：第二个阴影扩散的角度要大于第一个阴影，不然只显示第一个阴影，因为第二个被遮盖了

如果元素中的内容超出了给定的宽度和高度属性，overflow 属性可以确定是否显示滚动条等行为
overflow hidden;
- .voice_container button:nth-of-type(1){/*子元素里botton相同类型中第几个*/