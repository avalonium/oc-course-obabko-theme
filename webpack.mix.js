const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

mix.webpackConfig(webpackConfig)
    .copy('node_modules/jquery/dist/jquery.min.js', 'assets/vendor/jquery/jquery.min.js')
    .copy('node_modules/alpinejs/dist/cdn.min.js', 'assets/vendor/alpinejs/alpine.min.js')
    .postCss("resources/css/app.pcss", "assets/css", [ require("tailwindcss") ])