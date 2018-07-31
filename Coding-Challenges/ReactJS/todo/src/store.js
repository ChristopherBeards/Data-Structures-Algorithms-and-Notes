// rootReducer <- * -> App.js
// The store holds the whole state tree of the app

import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
