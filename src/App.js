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

    data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

    linearSearch(num) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] === num) {
          console.log(i + 1);
          this.setState({
            linearAnswer: i + 1,
          })
          break;
        }
      }
    }

    binarySearch(value) {

    }

    linearUpdate(e) {
      e.preventDefault();
      let inputData = parseInt(e.target.inputData.value, 10);
      this.linearSearch(inputData)
    }

    binaryUpdate(e) {
      e.preventDefault();
      let inputData = parseInt(e.target.inputData.value, 10);
      this.binarySearch(inputData)
    }

    render() {
      return (
        <div className="App">
          <Header />
          <div className="search-container">
            <LinearSearch 
              linearUpdate={(e) => this.linearUpdate(e)} 
            />
            <h2>Steps it took to find target: {this.state.linearAnswer}</h2>
            <BinarySearch 
              binaryUpdate={(e) => this.binaryUpdate(e)} 
            />
            <h2>Steps it took to find target: {this.state.binaryrAnswer}</h2>
          </div>
        </div>
      );
    }
  }



export default App;
