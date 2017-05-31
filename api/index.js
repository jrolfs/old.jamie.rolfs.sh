const Router = require('koa-router');
const config = require('./utils/config');

// Controllers
const github = require('./controllers/github');

const router = new Router({ prefix: '/api' });

router.use('', github);

config.write(router);

module.exports = router.routes();
