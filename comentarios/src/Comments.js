import React, {Component} from 'react'

class Comments extends Component{
  writeComment(valor, index){
    return (
      <li key={index}>
        {valor.comment}
      </li>
    )
  }
  render(){
    return(
      <ul>
        {console.log(Object.keys(this.props.comments))}
        {Object.values(this.props.comments).map((comentario, index) => this.writeComment(comentario, index))}
      </ul>
    )
  }
}

export default Comments