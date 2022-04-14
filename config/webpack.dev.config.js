const path =  require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowerPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const PORT = 8080

const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new HtmlWebpackPlugin({inject: 'body',title: 'React APP',filename: 'index.html',template: path.join(__dirname,'../src/index.html')}),
        new OpenBrowerPlugin({url: `http://localhost:${PORT}/#/`}),
    ],
    devtool: 'eval-source-map'
}

module.exports = merge(webpackConfigDev,webpackConfigBase)  // merge合并两个配置文件