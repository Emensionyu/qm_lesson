const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const apiRouter = new Router();
apiRouter.get('/', async (ctx) => {
  ctx.body = {'msg': 'hello world'}
});

app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods());

app.listen(8080, () => {
  console.log('server is running');
})