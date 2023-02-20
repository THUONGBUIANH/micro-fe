const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "vueApp",
      filename: "remoteEntry.js",
      exposes: {
        "./VueApp": "./src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);