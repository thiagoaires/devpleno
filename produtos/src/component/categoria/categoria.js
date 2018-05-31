import React, { Component } from 'react'
import axios from 'axios'

export default class Categoria extends Component{
  constructor(props){
    super(props)
    this.state = {
      produtos: []
    }
  }
  loadData(id){
    axios
      .get(`http://localhost:3001/produtos?categoria=${id}`)
      .then(res => {
        this.setState({produtos: res.data})
      })
  }
  componentDidMount(){
    this.loadData(this.props.match.params.catId)
  }
  componentWillReceiveProps(newProps){
    this.loadData(newProps.match.params.catId)
  }
  render(){
    return(
      <div>
        <h2>Categoria {this.props.match.params.catId}</h2>
        {
          this.state.produtos.map(prod => prod.nome)
        }
      </div>
    )
  }
}