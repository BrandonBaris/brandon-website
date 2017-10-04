const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge( common, {
	output: {
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
		// TODO: Currently known issue blocking from compiling
	  // new UglifyJSWebpackPlugin({
	  // 	sourceMap: true
	  // }),
	]
});