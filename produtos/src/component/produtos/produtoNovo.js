import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProdutoNovo extends Component{
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }

    this.createNewProduto = this.createNewProduto.bind(this)
  }
  createNewProduto(){
    const produto = {
      nome: this.refs.nomeProd.value, 
      categoria: this.refs.categoriaProd.value
    }
    this.props.createProduto(produto)
      .then(this.setState({redirect: 'categoria/' + produto.categoria}))
  }

  renderCategorias(cat){
    return (
      <option value={cat.id} key={cat.id}>{cat.nome}</option>
    )
  }
  render(){
    const { categorias } = this.props
    if (this.state.redirect){ 
      return <Redirect to={this.state.redirect}/>
    }
    return(
      <div>
        <h2>Cadastrar novo produto</h2>
        <div className='form-group'>
          <input ref='nomeProd' type="text" className='form-control' placeholder='Insira o nome do produto'/>
        </div>
        <div className='form-group'> 
          <select className='form-control' ref='categoriaProd'>
            {
              categorias.map(this.renderCategorias)
            }
          </select>
        </div>
        <button onClick={this.createNewProduto} className='btn btn-primary'>
            Cadastrar Produto
        </button>
      </div>
    )
  }
}

export default ProdutoNovo