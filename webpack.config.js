// This config file is generated with webpack-cli

const webpack = require('webpack');
const path = require('path');

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // For production only

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals'); // Fix error on cannot resolve 'fs' and 'net' 



module.exports = {
	entry: './src/index',

	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [nodeExternals()],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,

				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			}
		]
	},

	plugins: [
		// new UglifyJSPlugin(), 
		new ExtractTextPlugin('assets/css/style.css'),
		new HtmlWebpackPlugin({
			template: './src/views/index.ejs'
		}),
		// new CleanWebpackPlugin() // Comment this out when trying to run webpack-dev-server else it will delete the build folder!
	]

};
