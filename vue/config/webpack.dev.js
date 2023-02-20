const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:8082/",
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

module.exports = merge(commonConfig, devConfig);
