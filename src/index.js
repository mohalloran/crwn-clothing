import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store, persistor}  from './redux/store';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';//local persistance


//Provider gets us everything related to the store and 
//make the store available throught out application
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <PersistGate persistor={persistor}>
        <App />
       </PersistGate>
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);

