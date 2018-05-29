import React, { Component } from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

import Base from './Base'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      'comments': {},
      isLogged: false,
      user: ''
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

  auth(provider){
    console.log(provider)
  }
  render() {

    return (
      <div className="container">
        { this.state.isLogged && <NewComment postNewComment={this.postNewComment}/> }
        { !this.state.isLogged && 
          <div className="alert alert-info">
            <button type="button" className="btn btn-primary" onClick={() => this.auth('facebook')}>Login com o Facebook</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
