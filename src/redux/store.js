import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from  'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

//redux middleware logger nice to have for logging
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middleware combined in an array and applyMiddleware uses it 
const middlewares = [];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer,composeEnhancers( applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store , persistor };