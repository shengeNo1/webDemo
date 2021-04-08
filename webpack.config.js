
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // entry: './src/main.ts',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        publicPath: "xuni"
    },
    devServer: {
        port: 8085,
        contentBase: 'www'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    }
}
