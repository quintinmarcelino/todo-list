import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.js';

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const port = process.env.PORT || 8888;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port);