import React, { Component } from 'react';
import './App.css';

import Myip from './components/Myip'
import Agent from './components/Agent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          high order component
          <Myip />
          <Agent />
        </header>

      </div>
    );
  }
}

export default App;
