const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
    showErrors: true
});

module.exports = {
    devtool: 'eval-source-map',

    entry: [
        './app/index.js'
    ],

    resolve: {
        extensions: ['', '.js']
    },

    output: {
        path: __dirname + '/dist',
        filenmae: 'index_bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
}
