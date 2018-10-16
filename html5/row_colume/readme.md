- 如何设计一个跨终端的网页栅格系统。4等分（pc）三等分（ipad） 二等分（手机）
- Twitter Bootstrap是一个自适应的前端框架，可以实现一套代码不同设备都可以运行，在一个col上定义 多个尺寸，
media query
。.col-lg-n 超大电脑 >1200min-width
.col-mg-n 中等电脑>1000 1000-1200 sm
.col-sm-n iPad >768px <1024 
.col-xs-n 手机 <768 max-width 767

- .container
    .row
    .col-${n}
- float 具有更好的兼容性
