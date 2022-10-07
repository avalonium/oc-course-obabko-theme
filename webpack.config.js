const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    stats: 'errors-only',
    output: {
        publicPath: '../',
        path: path.resolve(__dirname, 'assets'),
    },
    plugins: [
        new WebpackNotifierPlugin({title: 'Webpack'}),
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