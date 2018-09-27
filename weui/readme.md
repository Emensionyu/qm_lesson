- css 命名规范 BEM
Block
页面是由多个block构成的，跟其他block区分开来 tabbar
Element_在区块中担负的职责，取唯一性的名字
并不是简单的父子关系
__label
__icon
Modifier 
    状态的修改
    __item_on

- WEUI
    微信UI规范，内嵌公众号，小程序，调起webview，为了让用户体验一次，让用户有认同感，
    mobile web App
前端界面框架 weui.css
- 组件
大部分项目，70%都是通用组件构成的，组件，拿来就用。
- tabbar
.tabbar>a.item>(span>img+span.bage)+p
词汇量 组件词汇tabbar  bage 一般词汇
item
良好的结构和语义化标签
flex块级元素变行内块级
- http 状态码
2开头 200成功
3开头 跳转
4开头 404
5 服务器错误