const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: path.join(__dirname, 'src/index.template.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new GhPagesWebpackPlugin({
            path: './public',
            options: {
                message: 'Update Home Page',
                user: {
                    name: '年糕小豆汤',
                    email: 'ooiss@qq.com'
                }
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8082,
        overlay: {
          warnings: true,
          errors: true
        },
        quiet: true
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

