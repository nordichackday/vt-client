/*eslint-env node*/

import path from 'path';
import koa from 'koa';
import stylus from './middleware/stylus';
import webpack from './middleware/webpack';
import page from './middleware/page';
import serve from 'koa-static';
import request from 'superagent';
import thunkify from 'thunkify';

const router = require('koa-router')();
const app = koa();
const port = process.env.PORT || 3000;
const debug = require('debug')('http');
const get = thunkify(request.get);

// Use middleware
app.use(webpack);
app.use(stylus);
app.use(page);
app.use(serve(path.resolve(__dirname, '../static')));

router.get('/', function* () {
  const data = yield get('http://vt.dev/');
  yield this.renderPage('pages/story', JSON.parse(data.text));
});

app.use(router.routes());

app.listen(port);

debug('The application is running on port ' + port);
