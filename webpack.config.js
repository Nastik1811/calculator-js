const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development'

    const filename = (ext) => isDev ? `[name].bundle.${ext}` : `[name].[contenthash].bundle.${ext}` 

    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                template: './index.html'
            }), 
            new MiniCssExtractPlugin({
                filename: filename('css')
            }),
            new FaviconsWebpackPlugin({
                logo: './favicon.png',
                favicons: {
                    appName: 'calculator-js',
                    appDescription: 'My Calculator',
                    developerName: 'Anastasia Lugovskaya',
                    developerURL: null,
                    icons: {
                        coast: false,
                        yandex: false
                    }
                }

            })
        ]

        if (isDev) {
            base.push(new ESLintPlugin())
        }

        return base
    }

    return {
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename('js'),
            clean: true
        },
        plugins: plugins(),
        devtool: isDev ? 'source-map' : false,
        devServer: {
            port: 4200
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        }
    }
}
