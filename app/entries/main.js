/*eslint-env browser*/

import React from 'react';
import Router from 'react-router';
import Dashboard from '../pages/story';

const $ = window.jQuery;
const { Route, RouteHandler } = Router;

const routes = (
  <Route path='/' handler={RouteHandler}>
    <Route path='/' handler={Dashboard} />
  </Route>
);

const initialData = JSON.parse($('#initial-data').html() || '{}');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler { ... initialData } />, document.querySelector('.page'));
});
