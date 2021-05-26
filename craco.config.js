const CracoLessPlugin = require("craco-less");
const StyledComponentsPlugin = require("babel-plugin-styled-components");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: StyledComponentsPlugin,
      options: {
        displayName: process.env.NODE_ENV !== "production",
        fileName: false,
        pure: true,
        ssr: false,
      }
    },
  ],
};
