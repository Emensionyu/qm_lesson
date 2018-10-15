- 小程序
内嵌在微信超级app，是WebView+微信一些app插件的混合 WebView App 内嵌页面技术 让App开发使用上Web技术，比Android、IOS更快，缺点是性慢
在拍照，tabbar，navigationbar等一些关键的地方能够调用原生微信里的原生组件，提升性能，
WXML 没有div view 
WXSS  使用弹性布局作为布局方式
js文件，用MVMM来数据绑定

- 架构
 小程序的架构是极其简单的，
 app.js是入口文件
 app.json是项目的配置文件，可以在爬个山里找到所有页面
 1. 注册所有文件
 2. window 设置 App名字，navigationBar背景色 文字色
 3. tabbar 如果app需要底栏 就设置tabbar
 pages 小程序 页面组成
1. wxml 写结构
2. wxss 样式
3. js 逻辑
4. json 文件 页面级别配置文件

- 组件 
小程序提供了很多内置的功能组件
swiper 声明式组件 html标签 功能贫瘠
组件 集合了很多标签及功能 
swiper>swiper-item
indicator-dots="{{true}}"
{{js 区链}} 模板符号

- 数据驱动的界面
界面，数据 传统做法是分别由前端，后端独立做的

大前端是让界面活起来，将直接绑定数据。{{}}将界面从html变成模板
小程序为数据绑定提供了约定
Page（{
    data：{
        数据区域->{{}}）
    }
})

- 指令
wx：for循环输出指令 在block里

- rpx
相对单位，小程序为了适配所有手机，宽度都是750rpx

