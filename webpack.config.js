const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, `src/components`),
      "@hocs": path.resolve(__dirname, `src/hocs`),
      "@utils": path.resolve(__dirname, `src/utils`),
      "@reducer": path.resolve(__dirname, `src/reducer`),
      "@redux": path.resolve(__dirname, `src/redux`)
    },
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
      propTypes: `prop-types`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  devtool: `source-map`
}
