import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculetor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
