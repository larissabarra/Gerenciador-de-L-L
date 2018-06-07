import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const store = createStore(
    rootReducer,
    composeEhancers()
  );
  return store;
}