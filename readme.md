#  前端工作流
yarn
现代的软件开发是一个流水线， 前端应该使用的最新的工作流程， 核心就是npm，yarn
1. web server
live-server 启动服务器
修改代码，自动刷新，不需要手动f5刷新了

emmet 使用css选择器快速输入html
2.animation 动画属性 animation-name: myfirst;规定 @keyframes 动画的名称
    animation-duration: 5s;规定动画完成一个周期所花费的秒或毫秒。默认是 0。
    animation-iteration-count: infinite;规定动画被播放的次数。默认是 1，infinite为无限次播放
    step（补间数）


# backgroung-position   
  left top
  left center
  left bottom
right top
right center
right bottom
center top
center center
center bottom	如果仅指定一个关键字，其他值将会是"center"

x% y%	第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％

xpos ypos	第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions
# backgroung-size
1.length	设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动)

2.percentage	将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)"

3.cover	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。

4.contain	此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。
   