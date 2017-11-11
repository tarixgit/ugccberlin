var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        publicPath: 'public/'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {loader: 'css-loader', },
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src/js"),
                    path.resolve(__dirname, "src/tests"),
                    path.resolve(__dirname, "src/index.js")
                ],
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src/js"),
                    path.resolve(__dirname, "src/tests")
                ],
            }
        ]
    },
    devtool: 'source-map'
};