import React, { Component } from 'react';

import './App.css';
import Search from './components/Search';
import Header from './components/Header';

class App extends Component {

  state = {
    linearAnswer: 0,
    binaryAnswer: 0,
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Linear Search</h1>
          <Search />
        <h1>Binary Search</h1>
          <Search />
      </div>
    );
  }
}

export default App;
