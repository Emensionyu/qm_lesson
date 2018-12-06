#hashtag 在当前页面切换 本页面不会刷新
单页应用
hashchange 事件，组建的动态加载
#hashtag =>url 的一部分，

- 传统的地址切换有以下问题
    1.  重度依赖于http协议,
        当只有后端路由时重新生成html网页 新的页面会有新的dom渲染的过程，会比较慢，影响体验
    - 新时代的路由
        history api,或有hashtag 不会产生页面的跳转，捕捉到事件，马上切出对应的组件。
    - history API
    url 访问，都是浏览器中的一个访问记录，
    就是数据结构里的栈，
    pushState(null,null,'#/hello') 入栈一个浏览历史，
    pop

    给我们的访问新增一个记录，但是不会刷新页面，得到一个popstate事件，页面组建的切换
    前端路由已经成熟，既可以hash 亦可以path切换
