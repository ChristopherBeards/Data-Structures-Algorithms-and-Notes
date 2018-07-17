import React, { Component } from 'react';
import '../styles/App.css';
import BookList from '../containers/booklist';
import BookDetail from '../containers/bookdetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <div className="App-header">
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
