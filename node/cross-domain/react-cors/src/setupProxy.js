const proxy = require('http-proxy-middleware');

// http://localhost:3000/api/a/b/c api 取数据代理成这样的
// 后端专门开发api 
//   http://localhost:8080/a/b/c  
module.exports = function(app) {
  app.use(proxy('/api', {
    "target": "http://localhost:8080",
    "changeOrigin": true,//允许跨域
    "pathRewrite": {
      '^/api': ''
    }
    // 改写 路径 所有以api开始的代理请求
  }));
}