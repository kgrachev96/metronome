const path = require('path');
const argv = require('yargs').argv;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/build');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: isDevelopment
});
const htmlWebpack = new HtmlWebpackPlugin({
    template: './src/index.html',
});
const faviconsWebpack = new FaviconsWebpackPlugin({
    logo: './src/favicon/favicon.png',
    prefix: 'favicons/',
    emitStats: false,
    statsFilename: 'iconstats-[hash].json',
    persistentCache: true,
    inject: true,
    background: '#fff',
    title: 'Метроном',

    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
    }
});
const webpackShell = new WebpackShellPlugin({
    onBuildExit: [
        'cp ./.htaccess ./build/',
        'cp ./src/images/og-image.jpg ./build/assets/images/',
    ]
});

const config = {
    entry: {
        main: './src/index.tsx'
    },
    output: {
        filename: 'app.js',
        path: distPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(gif|jpg|png|jpe?g|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name].[ext]'
                    }
                },
            }]
    },
    plugins: isProduction ? [
        extractSass,
        htmlWebpack,
        faviconsWebpack,
        webpackShell
    ] : [
            extractSass,
            htmlWebpack,
            faviconsWebpack
        ],
    optimization: isProduction ? {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false,
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    },
                },
            }),
        ],
    } : {},
    devServer: {
        contentBase: distPath,
        port: 4000,
        compress: true,
        open: true
    }
};

module.exports = config;