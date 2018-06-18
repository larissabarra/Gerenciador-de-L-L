import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import NewEventForm from './NewEventForm';
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <NewEventForm />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
