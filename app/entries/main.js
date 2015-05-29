/*eslint-env browser*/

import React from 'react';
import Router from 'react-router';
import Story from '../pages/story';

const $ = window.jQuery;
const { Route, RouteHandler } = Router;

const routes = (
  <Route path='/' handler={RouteHandler}>
    <Route path='/timeline/:id' handler={Story} />
  </Route>
);

const initialData = JSON.parse($('#initial-data').html() || '{}');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler { ... initialData } />, document.querySelector('.page'));
});
