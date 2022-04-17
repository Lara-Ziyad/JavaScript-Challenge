/* eslint-env node */

const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    entry: fs.readdirSync('./tests').map(s => `./tests/${s}`),
    output: {
        path: __dirname,
        filename: 'tests.js'
    },
    module: {
        loaders: [
            { test: /\.test.js/, loader: 'mocha-loader' },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        port: 4444,
    }
};

