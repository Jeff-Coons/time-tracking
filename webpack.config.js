const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filenmae: 'index.html',
    inject: 'body'
})

module.exports = {
    devtool: 'eval-source-map',

    devServer: {
        // stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT
    },

    entry: [
        './app/index.js'
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist',
        filenmae: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                progress: true
            }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
};
