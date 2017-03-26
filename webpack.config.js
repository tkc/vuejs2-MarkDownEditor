const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: [
            './src/main.js',
            './scss/style.scss'
        ],
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'build.js'
        },
        module: {
            loaders: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'style.css',
                allChunks: true,
            }),
        ],
        devtool: '#eval-source-map'
    }
];

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
