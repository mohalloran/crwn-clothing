import { createStore, applyMiddleware } from 'redux';

//redux middleware logger nice to have for logging
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//middleware combined in an array and applyMiddleware uses it 
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;