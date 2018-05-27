import React, { Component } from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(){
    super()
    this.state = {
      'comments': {
        '1': {
          comment: 'comentario um'
        },
        '2': {
          comment: 'comentario dois'
          }
      }
    }
  }
  postNewComment(comment){
    this.setState(
      ...this.state.comments, comment
    )
  }
  render() {
    return (
      <div className="container">
        <NewComment />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
