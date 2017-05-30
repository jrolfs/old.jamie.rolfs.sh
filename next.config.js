const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    );

    return config;
  }
};
