var path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        entry: {
            bundle: './public/js/app.js'
        },
        output: {
            path: './public/js/static/',
            filename: '[name].js',
            library: 'MainModule',
            libraryTarget: 'umd',
        },
        module: {
            loaders: [
                {
                    test: /(\.js)$/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: (/\.css$/), loader: "style-loader!css-loader"
                },
                {
                    test: /\.vue$/, loader: "vue-loader"
                }
            ]
        }
    }
];