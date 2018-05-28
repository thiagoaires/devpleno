import React, {Component} from 'react'

class NewComment extends Component{
  constructor(props){
    super(props)

    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter(event){
    
    if (event.keyCode === 13){
      event.preventDefault()
      this.props.postNewComment({comment: this.refs.comment.value})
      event.target.value = null
    }
  }

  render(){
    return (
      <textarea ref="comment" placeholder="insira seu comentario" className="form-control" onKeyDown={this.handleEnter}></textarea>
    )
  }
}

export default NewComment