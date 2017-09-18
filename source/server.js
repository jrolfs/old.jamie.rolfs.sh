const Koa = require('koa');
const Next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dir: './source', dev });
const handle = app.getRequestHandler();
const api = require('./api');

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(api);

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Sready on http://localhost:3000');
  });
});
