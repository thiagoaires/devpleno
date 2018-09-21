import React, { Component } from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {reducer} from './reducer'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Thunk</h1>
      </div>
    );
  }
}

export default App;