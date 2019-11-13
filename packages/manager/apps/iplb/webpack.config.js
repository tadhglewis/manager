const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('@ovh-ux/manager-webpack-config');

module.exports = (env = {}) => {
  const { config } = webpackConfig({
    template: './src/index.html',
    basePath: './src',
    lessPath: [
      './node_modules',
    ],
    root: path.resolve(__dirname, './src'),
    assets: {
      files: [
        { from: path.resolve(__dirname, '../../../../node_modules/flag-icon-css/flags/4x3'), to: 'flag-icon-css/flags/4x3' },
        { from: path.resolve(__dirname, '../../../../node_modules/flag-icon-css/flags/1x1'), to: 'flag-icon-css/flags/1x1' },
      ],
    },
  }, env);

  return merge(config, {
    entry: path.resolve('./src/index.js'),
    resolve: {
      modules: [
        path.resolve(process.cwd(), './node_modules'),
        path.resolve(process.cwd(), '../../../../node_modules'),
      ],
      mainFields: ['module', 'browser', 'main'],
    },
  });
};
