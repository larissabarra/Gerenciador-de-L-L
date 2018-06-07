import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NewEventForm from './NewEventForm';

ReactDOM.render(<NewEventForm />, document.getElementById('root'));
registerServiceWorker();
