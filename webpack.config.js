// DEV CONFIG
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = merge( common, {
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: './dist'
	},
	output: {
		filename: '[name].js'
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new BrowserSyncWebpackPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:8080'
			},
			{
				// Disables BS reload and uses webpack-dev-server to reload
				reload: false
			}
		)
	]
});