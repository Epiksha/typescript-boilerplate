const { join } = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/App.ts',
    ],

    plugins: [
        new SpriteLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.ts/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
                include: [join(__dirname, 'src')]
            },
            {
                test: /\.js/,
                use: [
                    'babel-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.(ts|tsx|js)/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(woff|ttf|eot|jpe?g|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    }
};