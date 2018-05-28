import React, {Component} from 'react'
import Comment from './Comment'

class Comments extends Component{
  writeComment(valor, index){
    return (
        <Comment key={index} commentContent={valor}/>
    )
  }
  render(){
    return(
      <div>
        {Object.values(this.props.comments).map((comentario, index) => 
          this.writeComment(comentario, index))
        }
      </div>
    )
  }
}

export default Comments