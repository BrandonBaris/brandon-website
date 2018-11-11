const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			},
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
	          loader: MiniCssExtractPlugin.loader,
	          options: {
		          publicPath: '../'
	          }
	        },
          'css-loader'
        ]
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
      },
      {
      	test: /\.js$/, exclude: /node_modules/,
      	loader: "babel-loader",
      	options: {
          presets: ['@babel/preset-env']
        }
    	}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.HashedModuleIdsPlugin(),
		new MiniCssExtractPlugin(),
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