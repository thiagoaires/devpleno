import React, { Component } from 'react'

export default class Categoria extends Component{
  constructor(props){
    super(props)
    this.state = {
      produtos: [],
      categoria: {}
    }
  }
  loadData(id){
    this.props.Api.loadProdutos(id)
      .then(res => {
        this.setState({produtos: res.data})
      })

    this.props.Api.loadCategoria(id)
      .then(res => {
        this.setState({categoria: res.data})
      })
  }
  
  componentDidMount(){
    this.loadData(this.props.match.params.catId)
  }
  componentWillReceiveProps(newProps){
    this.loadData(newProps.match.params.catId)
  }

  renderProdCat(prod){
    return (
      <p key={prod.id} className='well well-sm'>
        {prod.nome}
      </p>
    )
  }
  render(){
    return(
      <div>
        <h2>{this.state.categoria.nome}</h2>
        
        {
          this.state.produtos.map(this.renderProdCat)
        }
      </div>
    )
  }
}