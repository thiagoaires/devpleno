import React, { Component } from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

import base from './Base'

class App extends Component {

  constructor(props){

    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      'comments': {},
      isLogged: false,
      user: '',
    }

    this.refComments = base.syncState('comments',{
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged( user => {

        if (user){
          this.setState({isLogged:true, user})
        } else {
          this.setState({isLogged: false, user: {}}) 
        }
      }
    )
  }

  postNewComment(comment){

    comment.user = this.state.user.displayName
    const comments = {...this.state.comments}
    const timeStamp = Date.now()
    comments[`teste ${timeStamp}`] = comment
    this.setState({comments, comment})
  }

  auth(provider){

    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {

    return (
      <div className="container">
        { this.state.isLogged && 
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}/> 
          <span>Boa tarde, {this.state.user.displayName}</span>
          
          <button type="button" className="btn btn-sm btn-link" onClick={() => this.props.auth.signOut()}>Logoff</button>
          <NewComment postNewComment={this.postNewComment}/> 
        </div>
        }
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
