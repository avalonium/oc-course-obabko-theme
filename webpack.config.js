const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
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
    output: {
        assetModuleFilename: 'assets/img/[hash][ext]'
    }
}