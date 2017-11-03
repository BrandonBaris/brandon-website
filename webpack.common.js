const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: './app/index.js',
		vendor: [
			'lodash',
			'mithril'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				}))
			},
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),
		new ExtractTextWebpackPlugin('styles.css'),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			devServer: 'http://localhost:3000',
			meta: [
				{
					name: 'description',
					description: 'Brandon Baris\' Website'
				}
			],
			// favicon: TODO,
			minify: {
				collapseWhitespace: true
			},
			mobile: true,
			lang: 'en-US',
			title: 'Brandon\'s Website'
		})
	]
}