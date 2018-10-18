- 性能优化
    script标签具有阻塞性， src 下载代码，或行内的js并且执行  不要放在头部
    页面的显示，painting 绘制 排列 重绘重排
    script 标签放在底部 
    利用好生命周期
    window.onload doucument.DOMContentLoaded 

    js 开始 不要阻止页面的下载，dom的绘制 但是也不要等到window 都已经onload
    DOMContentLoaded dom ready img
- $(callback) 一个函数接受一个参数
    先执行$()函数在callback函数
    jquery $第一种使用用途是dom ready 事件
    $(function(){
        // js here 使用函数啊类啊 来组织
    })
    $(selector) 用于选择元素