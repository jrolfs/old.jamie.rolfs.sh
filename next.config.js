const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    );

    if (!dev) {
      config.plugins.map((plugin) => {
        if (plugin instanceof webpack.optimize.UglifyJsPlugin) {
          return new UglifyJSPlugin();
        }

        return plugin;
      });
    }

    return config;
  }
};
