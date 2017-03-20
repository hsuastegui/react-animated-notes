var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

process.env.NODE_ENV = 'development';

module.exports = {
  devtool: 'source-map',
  context: APP_DIR,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR + '/js',
    publicPath: '/js'
  },
  devServer: {
    open: true,
    contentBase: BUILD_DIR,
    compress: false,
    port: 9000
  },
  module : {
    rules : [
      {test: /\.jsx$|\.js$/, include: APP_DIR, use: ['babel-loader']},
      {test: /\.scss$|\.css$/, use: ['style-loader','css-loader','sass-loader']}
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
};
