
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: {
    "vuecomments": './src/js/app.js'
  },
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    // With the filename `build.js` so it's dist/build.js
    path: path.join(__dirname, 'dist'),
    filename: './js/[name].build.js'
  },

  devServer: {
    proxy: {
      "/rest/**": {
        target: "https://echo.websocket.org",
        pathRewrite: {
          "^/socket": ""
        },
        changeOrigin: true,
        secure: false
      }
    }
  },

  module: {
    // Special compilation rules
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            exclude: /node_modules/,
            css: ExtractTextPlugin.extract("css-loader"),
            less: ExtractTextPlugin.extract("css-loader!less-loader")
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new ExtractTextPlugin("css/[name].build.css"),
    new CopyWebpackPlugin([
      { from: './vendor', to: 'vendor' },
      { from: './static', to: 'static' },
      { from: './*.html', to: './' }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
