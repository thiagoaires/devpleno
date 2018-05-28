import React, { Component } from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
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
    const comments = {...this.state.comments}
    const timeStamp = Date.now()
    comments[`teste ${timeStamp}`] = comment
    this.setState({comments, comment})
  }
  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment}/>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
