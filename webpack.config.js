var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        }),
        new Dotenv()
    ],
    devServer: {
        historyApiFallback: true,
    },
};