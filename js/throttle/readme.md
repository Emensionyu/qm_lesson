Ajax Google Suggestion
猜出用户想搜索的内容
用户变输入 （input事件）边建议(ajax后端去匹配返回 List Dom)
react onChange input 
以前用户搜 只要向后端请求一次。
频繁的被触发，减少一些，不会影响效果，
节流
限制事件执行的方式 防抖和节流
使用lodash _.throttle(fn,time);

onmousemove ontouchmove 频繁触发多次 
throttle 在一定使劲内执行一次
 1. 使用时间戳+闭包
 2. 使用定时器
 区别 ：实现的方式，体验的细节，时间戳是先为0 previous now-previous>wait 先执行
 第一次执行的方式  setTimeout timeout null，是在wait 到点时执行，后执行