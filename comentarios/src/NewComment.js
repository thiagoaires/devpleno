import React, {Component} from 'react'

class NewComment extends Component{
  render(){
    return (
      <textarea placeholder="insira seu comentario" className="form-control"></textarea>
    )
  }
}

export default NewComment