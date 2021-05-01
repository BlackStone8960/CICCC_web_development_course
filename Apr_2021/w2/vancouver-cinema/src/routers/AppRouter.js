import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from "../components/HomePage";
import BookingSeat from "../components/BookingSeat";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/booking' component={BookingSeat} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };