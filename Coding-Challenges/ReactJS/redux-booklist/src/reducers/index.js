import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ActiveBook from './active_reducer';

const rootReducer = combineReducers({
  // [name] = [state]
  books: BooksReducer,
  ActiveBook: ActiveBook,
});

export default rootReducer;
