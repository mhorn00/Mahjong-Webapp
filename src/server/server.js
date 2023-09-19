const path = require('path');
const express = require('express');
const app = express();

//Live Reload dev
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

//Livereload code
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "dist"));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 200);
});
app.use(connectLiveReload());


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
