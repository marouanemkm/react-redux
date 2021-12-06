import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer from './Reducers/CounterReducer';
import AddCartReducer from './Reducers/AddCartReducer';

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
});

const customMiddleware = store => next => action => {
  console.log("hello world");
};

const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;