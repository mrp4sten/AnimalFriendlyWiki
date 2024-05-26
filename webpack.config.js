const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./src/app.ts'],
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/css", to: "css" },
        { from: "./public/js", to: "js" },
      ],
    })
  ],
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "./dist"
  }
}
