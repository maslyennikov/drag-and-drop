import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';

import initialStore from './initialStore';
import app from './modules/app'

/** Reducers */
const rootReducer = combineReducers({
    app
});

// @ts-ignore
/** Enhancers */
const enhancer = composeWithDevTools();

/** Store */
const store = createStore(
    rootReducer,
    initialStore,
    enhancer
);

export default store;
