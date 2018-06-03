import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Api from './helpers/api'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App api={Api}/>, document.getElementById('root'));
registerServiceWorker();
