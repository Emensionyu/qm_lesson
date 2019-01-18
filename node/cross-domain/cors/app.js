const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const cors = require('koa-cors');
app.use(cors({
  origin:(ctx) => {
    return 'http://127.0.0.1:8080';//允许哪些
  },
  maxAage: 5,//第一个请求不超过5s
  allowMethods: ['GET', 'POST', 'DELETE'], //支持跨域请求的方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //请求头
  crendentials: true //cookie
}));

router.get('/', async(ctx) => {
  const data = {uid: 1000};
  const callback = ctx.request.query.callback || null;
  ctx.body = data;
})

router.post('/', async (ctx) => {
  const data = {uid: 1000, msg: '非简单cors'};
  ctx.body = data;
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running');
})