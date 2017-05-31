const Router = require('koa-router');
const config = require('config');
const { get } = require('lodash');
const { Lokka } = require('lokka');
const Transport = require('lokka-transport-http').Transport;

const router = new Router({ prefix: '/github' });
const settings = config.get('github');
const headers = { Authorization: `bearer ${settings.token}` };
const transport = new Transport(settings.endpoint, { headers });
const client = new Lokka({ transport });

//
// Routes

router.get('repositories', '/repositories', getRepositories);

//
// Handlers

async function getRepositories(ctx) {
  return client
    .query(
      `
        {
          viewer {
            name
             repositories(last: 100, privacy: PUBLIC, isFork: false) {
               nodes {
                 name
                 url
               }
             }
           }
         }
      `
    )
    .then((result) => {
      console.log(get(result, 'viewer.repositories.nodes'));
      ctx.body = get(result, 'viewer.repositories.nodes');
    });
}

module.exports = router.middleware();
