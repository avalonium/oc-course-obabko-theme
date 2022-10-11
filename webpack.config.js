const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
    stats: 'errors-only',
    output: {
        publicPath: '../',
        path: path.resolve(__dirname, 'assets'),
    },
    plugins: [
        new WebpackNotifierPlugin({title: 'Webpack'}),
        new ImageminWebpWebpackPlugin(),
        new BrowserSyncPlugin({
            proxy: 'localhost',
            files: [
                './content/**/*.htm',
                './layouts/**/*.htm',
                './pages/**/*.htm',
                './partials/**/*.htm'
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator : {
                    filename : 'images/[name][ext]',
                    emit: false
                }
            }
        ]
    }
}