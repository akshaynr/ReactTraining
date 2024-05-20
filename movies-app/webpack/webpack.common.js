const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader ,
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json",
        }),
        // isProduction && new MiniCssExtractPlugin({
        //     filename: 'styles.css',
        // }),
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    ].filter(Boolean),
    optimization: {
        //minimize: isProduction,
        minimizer: [
            new TerserPlugin(),
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 3002,
        open: true,
    },
};
