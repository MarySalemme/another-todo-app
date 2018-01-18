import { combineReducers, createStore } from 'redux';

import todoListApp from './reducers';

const reducers = combineReducers({
  todoListApp,
});
// this resulting reducer ('reducers') calls every child reducer
// and gathers their results into a single state object

export default createStore(reducers);
// creates a Redux store that holds the complete state tree of the app
