// * Active Book Reducer
// State argument is not application state, and is only
// the state that this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
