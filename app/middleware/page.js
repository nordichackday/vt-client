/*eslint-env node*/

import fs from 'fs';
import path from 'path';
import swig from 'swig';
import React from 'react';

function exists(filePath) {
  return function (cb) {
    fs.exists(filePath, function (exists) {
      cb(null, exists);
    });
  }
}

export default function* (next) {
  this.renderPage = function* (pagePath, data) {
    const viewPath = path.resolve(__dirname, '../views/layout.html');
    const viewExists = yield exists(viewPath);

    if (viewExists) {
      this.set('Content-Type', 'text/html');

      this.body = swig.renderFile(viewPath, {
        page: function () {
          const PageComponent = React.createFactory(require('../' + pagePath));
          return React.renderToString(PageComponent(data));
        },
        data: function () {
          return JSON.stringify(data);
        }
      });
    } else {
      yield next;
    }
  };

  yield next;
}
