import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stopwatchStore from './app/stopwatchStore';
import App from './App';

ReactDOM.render(
  <Provider store={stopwatchStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

