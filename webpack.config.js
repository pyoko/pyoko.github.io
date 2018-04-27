const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname);

module.exports = {
	entry: {
		app: "./src/js/app.js"
	},
	output: {
		filename: "./dist/js/[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: APP_DIR,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				include: APP_DIR,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							/*query: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[local]___[hash:base64:5]'
							}*/
						}, 
						"postcss-loader", 
						"sass-loader"
					]
				})
			},
			{
				test: /\.css$/,
				include: APP_DIR,
				loader: [
					{
						loader: 'css-loader',
						query: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[local]___[hash:base64:5]'
						}
					},
					'postcss-loader',
				]
			},
			{
                test: /\.(eot|ttf|woff|woff2)$/,
                include: APP_DIR,
                loader: {
                	loader: 'file-loader',
                	options: {
                		name: '../fonts/[name].[ext]',
                		emitFile: false
                	}
                }
            },
            { 
            	test: /\.(png|svg|jpe?g)$/, 
            	include: APP_DIR,
            	loader: {
                	loader: 'file-loader',
                	options: {
                		name: '../images/[sha512:hash:base64:7].[ext]',
                		emitFile: true		
                	}
                }
            }
		],
	},
	plugins: [
		new ExtractTextPlugin('dist/css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "dist/js/vendor.js"}),
	],
	watch: true
}