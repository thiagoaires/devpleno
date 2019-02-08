import React, { Component } from 'react';
import './App.css';

import MyIP from './components/MyIP'
import MyAgent from './components/MyAgent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          high order component
          <MyIP style={{background: '#fc0'}}/>
          <MyAgent />
        </header>

      </div>
    );
  }
}

export default App;
