import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunkMiddleware)
));

export default store;