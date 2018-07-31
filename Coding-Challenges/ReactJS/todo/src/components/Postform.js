import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import uuid from 'uuid';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = Object.assign({}, { id: uuid() }, { title, body });
    this.props.createPost(post);
    this.setState({
      title: '',
      body: '',
      errors: {},
    });
  };

  render() {
    return (
      <form className="form-group" onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={this.state.title}
          type="text"
          name="title"
          className="form-control"
          id="title"
          aria-describedby="noteHelp"
          placeholder="Enter Title"
        />
        <small id="titleHelp" className="form-text text-muted">
          What's on your mind?
        </small>
        <textarea
          onChange={this.onChange}
          value={this.state.body}
          name="body"
          className="form-control"
          rows="3"
          placeholder="Start typing..."
        />
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          style={{ marginTop: '10px' }}
        >
          Submit
        </button>
      </form>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createPost },
)(PostForm);
