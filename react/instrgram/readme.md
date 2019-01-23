- 后台 egg-init service --type=simple
- client 引入antd yarn add antd react-router-dom
    在babelrc中配置
   
    - 让css支持模块化  yarn add babel-plugin-import
    - 支持箭头函数 yarn add babel-plugin-transform-class-properties

- password 加密 
    存用户密码是 存加密过后的’
    登入，使用用户输入的密码 和同样的加密方式，将两个加密后的字符串进行比较
    cypto 通用的加密和哈希算法，Hmac  sha256 
    JSON Web Token JWT 是一个非常轻巧的规范，允许我们在用户和服务器之间传递安全可靠的信息
    cookie 