const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const domain = process.env.DOMAIN_APP;

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        reactApp: "reactApp@http://localhost:8081/remoteEntry.js",
        vueApp: "vueApp@http://localhost:8082/remoteEntry.js",
      },
      shared: {
        ...packageJson.dependencies,
      },
    }),
  ],
};

module.exports = merge(commonConfig, productionConfig);
