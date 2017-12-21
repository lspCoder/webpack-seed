const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    devtool: 'inline-source-map', //开发调试用
    // entry: './src/index.js',
    entry: {
        app: './app/index.js',
        vendor: ['jquery', './app/libs/plugin']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',           //server指向地址
        port: 8080          //server端口默认为8080
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin('dist/*.*', {          //清空dist目录
            root: __dirname,
            verbose: true, //Write logs to console.
            dry: false // If true, remove files on recompile. // Default: false
        }),
        new webpack.BannerPlugin('vonnie 版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            title: 'Getting start',
            // template: './index.template.html'       //创建模板html,支持ejs语法
        }),
        // new webpack.optimize.UglifyJsPlugin(), //压缩js代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // 指定公共 bundle 的名称。
        })
    ]
}