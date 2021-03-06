const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./frontend/scripts/main.js'
	],
	output: {
		path: path.resolve('./public/javascripts/'),
		filename: 'main.js',
		publicPath: '/javascripts/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'xo-loader',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	node: {
		net: 'empty',
		dns: 'empty'
	},
	xo: {
		failOnError: true
	}
};
