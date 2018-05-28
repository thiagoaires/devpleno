import React, { Component } from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

import Base from './Base'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      'comments': {}
    }
    this.refComments = Base.syncState('comments',{
      context: this,
      state: 'comments'
    })

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
