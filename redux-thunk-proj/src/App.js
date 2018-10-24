import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducer } from './reducer'

import Info from './Info'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App