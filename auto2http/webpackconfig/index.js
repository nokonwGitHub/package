const path = require("path");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
console.log(webpack)
module.exports = {
    mode: "production",
    devtool: "source-map",
    //出口
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    //入口文件
    entry: "./src/index.js",
    externals: {
        'electron': 'require("electron")',
        'fs':'require("fs")',
        'child_process':'require("child_process")',
        'moment':'require("moment")',

    },
    //解析第三放包
    /*resolve: {
        modules: [path.resolve('../node_modules')],
        // 扩展名
        extensions: ['js', 'css', 'json', 'vue'],
    },*/
    optimization: {
        //优化项
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ],
    },
    module: {
        // 不去解析jquery的解析关系
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        //添加 class和装饰器
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            ["@babel/plugin-proposal-class-properties", {"loose": true}],
                            ["@babel/plugin-transform-runtime"]
                        ]
                    },
                }
                ]
            },
        ]
    },

    plugins: [
        new webpack.BannerPlugin({banner: 'sssss'}),
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['./dist']}),
    ]
};
