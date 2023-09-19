const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
require('style-loader');
require('css-loader');

module.exports = {
	mode: 'development',
	entry: './src/app/index.js', //entry point
	output: {
		path: path.resolve(__dirname, 'dist'), //output path
		filename: 'bundle.js', //output file name
	},
	target: 'web',
	devServer: {
		port: 8000,
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
		],
	},
	plugins: [
		new LiveReloadPlugin()
	]
};
