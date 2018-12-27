var path = require('path')
module.exports = {

    devtool: 'cheap-module-eval-source-map',
    entry: {
        'index-output' : './source/main/index.js',
        'user-output' : './source/user/index.js'
    },
    output: {
        path: path.resolve(__dirname,'/views'),
        publicPath:'/views',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: { disableHostCheck: true }
}