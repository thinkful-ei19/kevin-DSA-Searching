import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kevin's DSA Search UI</h1>
        </header>
        <p className="App-intro">
          To get started, enter your data set to the appropriate field and click submit.
        </p>
        <h1>Linear Search</h1>
        <form>
          <textarea></textarea>
          <button type="submit">Search</button>
        </form>
        <h1>Binary Search</h1>
        <form>
          <textarea></textarea>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
