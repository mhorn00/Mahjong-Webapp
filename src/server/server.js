const path = require('path');
const express = require('express');
const app = express();

const PORT = 8000;

//webpack
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
	}),
    webpackHotMiddleware(compiler)
);


//serve react app for any other path
app.get('/*', function (req, res) {
	res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT, function () {
	console.log('Server Started');
});
