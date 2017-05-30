/* eslint-disable global-require */

const Router = require('koa-router');

const router = new Router({ prefix: '/api' });

module.exports = router.use(
  require('./controllers/github')
).routes();
