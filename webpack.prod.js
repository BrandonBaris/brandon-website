const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge( common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[chunkhash].js'
	},
	optimization: [new UglifyJSWebpackPlugin()],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
});