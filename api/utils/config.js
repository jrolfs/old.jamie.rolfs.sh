const fs = require('fs');
const { merge } = require('lodash');

function write(router) {
  const routes = router.stack.reduce(
    (layers, layer) =>
    merge(layers, { [layer.opts.prefix.replace('/', '')]: { [layer.name]: layer.path } }),
    {}
  );

  fs.writeFileSync('./config/routes.json', JSON.stringify(routes, null, 2));
}

module.exports = { write };
