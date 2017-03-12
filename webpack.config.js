const path = require ('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const HtmlWebpackPluginCfg = new HtmlWebpackPlugin(
    {
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    }
);*/
module.exports = {
    //context: path.join(__dirname, 'src'),

    entry:  './src/index.js',
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
        //sourceMapFilename: 'bundle.js.map'
    },
    resolve: {
        extensions: [ '.js', 'jsx', '.json'],
        /*root: path.resolve(__dirname, './src'),*/
    },
    devServer: {
            //color: true,
            historyApiFallback: true,
            inline: true,
            hot: true,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
    },
    module: {
        loaders: [{
                test: /.jsx?$/,
                //loader: 'babel-loader',
                loaders: ['react-hot-loader', 'babel-loader' ],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }],
        /*rules: [{
            test: /.js?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                emitWarning: true
            }
        },
        {
            test: /.jsx?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                emitWarning: true
            }
        }]*/
    },
    /*plugins: [new HtmlWebpackPlugin({
        template: "index.html",
        inject: "body"
    }
)],*/
    stats: {
        colors: true,
        progress: true,
        watch: true
    }
};
