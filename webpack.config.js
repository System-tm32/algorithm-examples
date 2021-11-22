const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main:'/src/index.js'
    },
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
