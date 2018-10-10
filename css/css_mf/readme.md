- 浏览器到底是怎么渲染html+css
1.html
html标签，dom树
解析文档树
解析css 渲染树，
放置元素，计算出来


BFC 
1. 原则一：给父元素添加overflow：hidden；后，可以创建一个格式化的上下文环境，定义它可以得到 子元素的高度。

- stylus
css 预编译系统 语法规则
写的.styl文件，stylus预编译成css文件
1. 省去了很多的约定

stylus style.styl -o css.css
使用stylus编译.styl文件 输出到css.csswenjain

stylus构建css开发工作流程
代码写在.styl文件中
浏览器要的是.css文件
stylus -w style.styl -o style.css
live-server 监听css文件的改变子刷页面