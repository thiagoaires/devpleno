import React, {Component} from 'react'

class Ola extends Component{
  render(){
    return(
      <div>
        Bem vindo {this.props.nome}
      </div>
    )
  }
}

export default Ola
