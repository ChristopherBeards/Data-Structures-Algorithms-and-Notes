import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Responsible for Rendering a List of Books
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm">
        <p>Book List: </p>
        {this.renderList()}
      </ul>
    );
  }
}

// Takes the application state as an argument
// Whatever is returned will be accessible as
// props for BookList
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Anything returned from this function ends up as
// props on the BookList container
function mapDispatchToProps(dispatch) {
  // When selectBook is called the result is passed to reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container
// It needs to know about the dispatch method selectBook
// and make it available as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
