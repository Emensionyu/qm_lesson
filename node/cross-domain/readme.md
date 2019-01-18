# 前端跨域问题解决方法

  - cookies
  网站为了识别用户身份， 进行session跟踪而储存在用户本地终端上的数据。
  服务端和客户端都可操作或访问
  ctx.cookies.set   document.cookie  形式是;隔开的key=value
  1. path 选项
    指定cookie 有效的路径
  2. http-only
    true js 无法获得cookie 值， 增强了cookie 的安全性 
  3. maxAge
  
  

跨域
同源： 协议 域名 端口 一致
同源策略 浏览器会拒绝请求。

1 A 网银网站 Cookie
2 QQ 澳门赌场 读Cookie 
3 同源策略

book.douban.com  movie.douban.com 
前端工程化进化 前后端， 分离  vue 8080   koa api 3000 

- jsonp 
  1. 不允许跨域的读操作
  2. 跨域资源嵌入 img src script[src]
  前后端
  优势： 兼容性好
  缺点是 GET 

- cors
  W3C推荐的一种新的官方方案， 服务器端支持XMLHttpRequest的跨域请求。
  优点是 只在后端
  简单，
  非简单  POST DELETE  
  -  白名单 origin(哪些跨得域才)

  react 前后端分理
  1. 本地代理 proxy
  create-react-app 3000  UI   请求转发给8080端口 
  proxy  http://localhost:3000/api   http://localhost:8080/api
  koa 8080  api    
  package.json 添加 proxy http://localhost:8080
  由create-react-app里webpack-dev-server
  webpack-dev-server  加了一个proxy, 读取package.json  
