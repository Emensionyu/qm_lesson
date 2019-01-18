const Koa = require('koa');
const app = new Koa();
const router = require('./router');

app.use(router.routes()).use(router.allowedMethods())
app.listen(8080, () => {
  console.log('server app is running');
})