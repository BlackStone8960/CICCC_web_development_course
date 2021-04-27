import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MovieList from "../components/MovieList";
import Book from "../components/Book";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={MovieList} exact={true} />
        <Route path='/book' component={Book} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };