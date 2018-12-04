module.exports = {
    entry: [
        './source/App.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
}