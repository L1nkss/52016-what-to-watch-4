const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/Index.jsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  resolve: {
    alias: {
      main: path.resolve(__dirname, `src/components/Main/Main.jsx`)
    },
    extensions: [`.js`, `.jsx`, `ts`, `tsx`],
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337
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
      }
    ],
  },
  devtool: `source-map`
}
