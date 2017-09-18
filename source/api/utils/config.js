const fs = require('fs');
const path = require('path');
const { merge } = require('lodash');

function write(router) {
  const routes = router.stack.reduce(
    (layers, layer) =>
      merge(layers, { [layer.opts.prefix.replace('/', '')]: { [layer.name]: layer.path } }),
    {}
  );

  fs.writeFileSync(path.join(__dirname, '..', 'routes.json'), JSON.stringify(routes, null, 2));
}

module.exports = { write };
