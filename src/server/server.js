const path = require('path');
const express = require('express');
const app = express();

const PORT = 8000;

//webpack middleware
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevInstance = webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	writeToDisk: true,
});

app.use(webpackDevInstance, webpackHotMiddleware(compiler));

webpackDevInstance.waitUntilValid(() => {
	console.log('Webpack Done');
	const distPath = path.resolve(__dirname, '../../dist');
	const distAssetsPath = path.resolve(__dirname, '../../dist/assets');
	const distIndexPath = path.resolve(__dirname, '../../dist/index.html');

	app.use(express.static(distPath));
	app.use('/assets', express.static(distAssetsPath));

	app.get('/api', function (req, res) {
		res.send('Hello World!');
	});

	//serve react app for any other path
	app.get('/*', function (req, res) {
		res.sendFile(distIndexPath);
	});

	app.listen(PORT, function () {
		console.log('Server Started');
	});
});
