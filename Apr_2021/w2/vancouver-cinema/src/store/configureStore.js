import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducer/movies'
import reservationsReducer from '../reducer/reservations'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      reservations: reservationsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export { configureStore as default };