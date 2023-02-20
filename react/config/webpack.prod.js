const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ReactApp": "./src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, productionConfig);
