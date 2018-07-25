import React, { Component } from 'react';
import Display from './Display';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 style={{ textAlign: 'left' }}>Post Titles</h1>
        <div className="container jumbotron">
          Below you will find a list of very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very very very very very very very very very
          very very very very very very... very very very irrlevent post titles.
          Enjoy!
        </div>
        <Display />
      </div>
    );
  }
}

export default App;
