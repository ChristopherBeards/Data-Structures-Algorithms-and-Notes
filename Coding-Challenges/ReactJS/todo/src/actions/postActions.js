// types <- * -> postReducer
// An action creator is a plain function that returns an action object

import { FETCH_POSTS, NEW_POST } from './types';

// Action creator
export const fetchPosts = () => {
  console.log('ACTION IS CALLED');
  // Action
  return {
    type: FETCH_POSTS,
  };
};

export const createPost = postData => {
  return {
    type: NEW_POST,
    payload: postData,
  };
};
