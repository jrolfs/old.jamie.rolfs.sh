module.exports = ({ env }) => ({
  plugins: {
    'postcss-easy-import': {},
    'postcss-cssnext': {},
    autoprefixer: env === 'production' ? {} : false,
    cssnano: env === 'production' ? {} : false
  }
});
