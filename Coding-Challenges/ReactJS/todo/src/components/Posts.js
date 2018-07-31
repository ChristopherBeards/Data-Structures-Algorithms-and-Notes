import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          key={post.id}
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{post.title}</strong> {post.body}
        </div>
      );
    });

    return (
      <div className="container">
        <h1>Notes</h1>
        {postItems}
      </div>
    );
  }
}

/* Type checking with PropTypes
 https://reactjs.org/docs/typechecking-with-proptypes.html
*/
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

// Connects state from the store to corresponding props
const mapStateToProps = state => ({
  // `posts` comes from the rootReducer
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(
  mapStateToProps,
  { fetchPosts },
)(Posts);
