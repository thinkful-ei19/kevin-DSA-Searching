import React from 'react';

import logo from '../logo.svg';
export default function Header(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Kevin's DSA Search UI</h1>
        <p className="App-intro">
        To get started, enter your data set to the appropriate field and click submit.
        </p>
      </header>
    </div>
  )
}