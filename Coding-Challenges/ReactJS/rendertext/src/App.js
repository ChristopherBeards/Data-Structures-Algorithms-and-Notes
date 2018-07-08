import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's Render Text</h1>
        </header>
        <p className="App-intro" style={{
            backgroundColor: '#e0e0e0',
            textAlign: 'center',
            height: '100%',
            width: '400px',
            padding: '10px',
            color: 'black',
            margin: '0'
        }}>
          This app should take user input from a text field
          and output that text to the screen in realtime. Also add a button
          to clear the text input. Write your code in the Input.js file.
        </p>
        <Input />
      </div>
    );
  }
}

export default App;
