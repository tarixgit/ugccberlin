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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src/js"),
                    path.resolve(__dirname, "src/tests"),
                    path.resolve(__dirname, "src/index.js")
                ],
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src/js"),
                    path.resolve(__dirname, "src/tests")
                ],
            },
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
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devtool: 'source-map'
};