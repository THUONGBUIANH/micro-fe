const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:8081/",
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

module.exports = merge(commonConfig, devConfig);
