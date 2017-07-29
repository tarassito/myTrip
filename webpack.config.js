var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry:   path.join(__dirname, 'myTrip/static/src/app.js'),
    output: {
        path: path.join(__dirname,'myTrip/static/public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js/,
            include: path.join(__dirname, 'myTrip/static/'),
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
      })
        }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true
        })
    ],
};

module.exports = config;
