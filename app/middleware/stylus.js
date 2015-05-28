/*eslint-env node*/

import fs from 'fs';
import path from 'path';
import stylus from 'stylus';
import nib from 'nib';

function exists(filePath) {
  return function (cb) {
    fs.exists(filePath, function (exists) {
      cb(null, exists);
    });
  }
}

function readFile(filePath) {
  return function (cb) {
    fs.readFile(filePath, cb);
  }
}

function renderStyl(input) {
  return function (cb) {
    stylus(input)
      .include(nib.path)
      .render(cb);
  }
}

export default function* (next) {
  const ext = path.extname(this.path);

  if (ext === '.css') {
    const stylPath = path.resolve(__dirname, '../entries' + path.dirname(this.path) + '/' + path.basename(this.path, '.css') + '.styl');
    const stylExists = yield exists(stylPath);

    if (stylExists) {
      this.set('Content-Type', 'text/css');

      const styl = yield readFile(stylPath);
      const css = yield renderStyl(styl.toString());

      this.body = css;
    } else {
      yield next;
    }
  } else {
    yield next;
  }
}
