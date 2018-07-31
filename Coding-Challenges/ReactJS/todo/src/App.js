// store <- *

import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

// * The Provider “provides” the store to child components

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <header className="jumbotron bg-primary" style={{ color: 'white' }}>
            <h1 className="App-title text-center ">Welcome to Notes</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
