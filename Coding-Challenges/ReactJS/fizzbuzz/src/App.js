import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    let count = this.state.counter;
    this.setState({ counter: ++count });
  };

  decrement = () => {
    let count = this.state.counter;
    this.setState({ counter: --count });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Click the Buttons!</h1>
        </div>

        <div style={{ paddingTop: 5 }}>
          <button type="button" onClick={this.decrement}>
            -
          </button>

          <button type="button" onClick={this.increment}>
            +
          </button>
        </div>

        <div style={{ paddingTop: 10 }}>{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
