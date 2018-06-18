import { createStore, compose } from 'redux';
import { eventoReducer } from '../reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    eventoReducer,
    composeEnhancers()
  );
  return store;
}