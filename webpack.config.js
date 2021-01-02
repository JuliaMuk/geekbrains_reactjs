const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: './static_src/index.jsx',
    },
   // context: path.resolve(__dirname, "static_src"),
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: path.resolve(__dirname, "node_modules"),
                loader: 'babel-loader',                
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins:['@babel/plugin-proposal-class-properties'],
                }  
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ],
    },
    plugins:[
        new CleanWebpackPlugin({cleanSraleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    output: {
        
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        
    },    
    resolve:{
        extensions:['.js','.jsx']
    }
        
};