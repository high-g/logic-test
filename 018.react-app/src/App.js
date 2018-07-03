import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Component1 from './Component1'
import Component2 from './Component2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Component1 value1={"VALUE2"} />
        <Component2 value2={1+1} />
      </div>
    );
  }
}

export default App;
