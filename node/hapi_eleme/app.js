const Hapi = require('hapi');
const server = new Hapi.Server();
const pluginHapiSwagger = require('./plugins/hapi-swagge')
const hello = require('./routes/hello-hapi')
const shops = require('./routes/shops')
const users = require('./routes/users')
if (process.env.NODE_ENV === 'production') {
  require('env2')('./.env.prod');
} else {
 require('env2')('./.env');
}
// 把.env配置放到process里面 并且env需要在config前面，这样在config里面才能引用
const config = require('./config')
const port = config.port;
const host = config.host;
server.connection({
  port,
  host
});

const init = async () => {
  // 注册插件
  await server.register(pluginHapiSwagger, function(err){
    if(err){
      throw err;
    }
  })
  // 配置路由
  server.route([
    ...hello,
    ...shops,
    ...users
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();
