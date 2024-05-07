const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: path.resolve(__dirname, './task_3/modules/header/header.js'),
        body: path.resolve(__dirname, './task_3/modules/body/body.js'),
        footer: path.resolve(__dirname, './task_3/modules/footer/footer.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'body',
            chunks: ['header', 'body', 'footer'],
            filename: 'index.html',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8564,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};