import React, { Component } from 'react'

export default class Categoria extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: null
    }
  }
  loadData(id){
    this.setState({id: id})
    this.props.loadProdutos(id)
    this.props.loadCategoria(id)
  }
  
  componentDidMount(){
    this.loadData(this.props.match.params.catId)
  }
  componentWillReceiveProps(newProps){
    if (newProps.match.params.catId !== this.state.id){
      this.loadData(newProps.match.params.catId)
    }
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
        <h2>
          {
            this.props.categoria.nome
            //this.props.categoria.nome
          }
        </h2>
        
        {
          this.props.produtos.map(this.renderProdCat)
        }
      </div>
    )
  }
}