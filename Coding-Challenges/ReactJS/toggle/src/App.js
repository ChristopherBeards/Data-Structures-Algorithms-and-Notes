import React, { Component } from 'react';
import Contacts from './Contacts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
