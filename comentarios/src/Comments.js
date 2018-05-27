import React, {Component} from 'react'

class Comments extends Component{
  render(){
    return(
      <div>
        comentarios serao carregados aqui<br />
        {JSON.stringify(this.props.comments)}
      </div>
    )
  }
}

export default Comments