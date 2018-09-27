- 能用html表达的一定不要用图
- inline 元素不能直接设置宽与高
  display：inline-block
- 节日活动页
- bg.jpg 是雪碧图 sprites
  网页打开速度，一切，
  速度杀手是 http请求数
  img src，
  link href，
  script src，
  http 请求去下载
  html 这外，
  并发http请求数是有限

  - html css 类名，积累词汇量
  - 背景很华丽，页面写法很难
  将背景分离出来盒子单独做
  用bg-$n组合将背景铺在下面
  z-index 上下铺的关系
  .bg z-index:1
  .main z-index:2
  .bg position: absolute 定位之后离开正常的文档流
  .main 将会跟它重合

 超链接是行内元素。不能设置宽和高
 只有通过改变display属性为inline-block才可以改变宽和高
2.让文字位于父元素中央，设置元素的行高
line-height=父元素的行高