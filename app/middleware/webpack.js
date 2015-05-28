/*eslint-env node*/

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const compiler = webpack(webpackConfig);

function hasEntry(entryPath) {
  let match = false;

  Object.keys(webpackConfig.entry).forEach(function (name) {
    if (!match && entryPath === '/' + name + '.js') {
      match = true;
    }
  });

  return match;
}

export default function* (next) {
  const entryExists = hasEntry(this.path);

  function compile(entryPath) {
    return function (cb) {
      compiler.run(function (err, stats) {
        if (err) {
          cb(err, null);
        } else {
          fs.readFile(path.resolve(__dirname, '../../static' + entryPath), function (err, data) {
            if (err) {
              cb(err, null);
            } else {
              cb(null, data);
            }
          });
        }
      });
    }
  }

  if (entryExists) {
    this.set('Content-Type', 'application/javascript');
    this.body = yield compile(this.path);
  } else {
    yield next;
  }
}
