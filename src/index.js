import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import './index.css';
import App from './App';

//Provider gets us everything related to the store and 
//make the store available throught out application
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  </Provider>,
  document.getElementById('root')
);

