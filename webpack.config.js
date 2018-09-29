const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
},
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
        },
        // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: /client/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name]_[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            include: /client/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }
    ]
  }
};
