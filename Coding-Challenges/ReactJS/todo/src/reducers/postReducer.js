// postActions <- * -> rootReducer
// Reducers update state

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = Object.assign({}, { items: [] });

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('REDUCER IS CALLED');
      return {
        ...state,
      };
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    /* Implement Delete */
    default:
      return state;
  }
}
