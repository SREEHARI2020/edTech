import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
 import fetchReducer from './reducer';

 const store=createStore(fetchReducer, applyMiddleware(thunk));

export default store