import React, { Component } from 'react';

import './App.css';
import LinearSearch from './components/LinearSearch';
import BinarySearch from './components/BinarySearch';
import Header from './components/Header';

class App extends Component {

  state = {
    linearAnswer: 0,
    binaryAnswer: 0,
  }

  linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (i = target) {
        this.setState({
          linearAnswer: i,
        })
      }
    }
  }

  binarySearch(value) {
    
  }

  linearUpdate(event) {
    event.preventDefault();
    linearSearch(event.target.value, )
  }

  binaryUpdate(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="search-container">
          <LinearSearch linearUpdate={this.linearUpdate} />
          <BinarySearch binaryUpdate={this.binaryUpdate} />
        </div>
      </div>
    );
  }
}

export default App;
