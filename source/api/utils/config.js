const { merge } = require('lodash');

function write(router) {
  global.routes = router.stack.reduce(
    (layers, layer) =>
      merge(layers, { [layer.opts.prefix.replace('/', '')]: { [layer.name]: layer.path } }),
    {}
  );
}

module.exports = { write };
