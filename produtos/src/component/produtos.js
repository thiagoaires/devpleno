import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './produtos/produtosHome'
import ProdutoNovo from './produtos/produtoNovo'
import Categoria from './categoria/categoria';


export default class Produtos extends Component {
  constructor(props){
    super(props)
 
    this.state = {
      editingCategoria: ''
    }
  
    this.renderCategoria = this.renderCategoria.bind(this)
    this.handleCategoria = this.handleCategoria.bind(this)
    this.handleEditCategoria = this.handleEditCategoria.bind(this)
    this.cancelCategoria = this.cancelCategoria.bind(this)

    this.estilo = {
      listStyle: 'none', 
      padding: 0
    }
  }
  editCategoria(categoria){
    this.setState({editingCategoria: categoria})
  }
  renderCategoria(cat){
    return(
      <li key={cat.id}>
      {
        this.state.editingCategoria === cat.id && 
        <div className='well well-sm'>
          <input className='form-group' onKeyUp={this.handleEditCategoria} type="text" ref={'cat-' + cat.id} defaultValue={cat.nome} />
          <button className='btn btn-primary btn-xs' onClick={this.cancelCategoria}>
            cancelar
          </button>
        </div>
      }
      { this.state.editingCategoria !== cat.id && 
        <div>
          <button className='btn btn-primary btn-xs' onClick={() => this.props.removeCategoria(cat.id)}>
            <span className='glyphicon glyphicon-remove'></span>
          </button>
          <button className='btn btn-primary btn-xs' onClick={() => this.editCategoria(cat.id)}>
            <span className='glyphicon glyphicon-pencil'></span>
          </button> 
          <Link to={`/produtos/categoria/${cat.id}`}>{cat.nome}</Link>
        </div>
        }
      </li>
    )
  }
  handleEditCategoria(e){
    if (e.keyCode === 13){
      this.props.editCategoria({id: this.state.editingCategoria, nome: this.refs['cat-' +  this.state.editingCategoria].value})
      this.setState({editingCategoria: ''})
    }
  }
  handleCategoria(e){
    if (e.keyCode === 13){
      this.props.createCategoria({nome: this.refs.categoria.value})
      this.refs.categoria.value = ''
    }
  }

  cancelCategoria(){
    this.setState({editingCategoria: ''})
  }

  componentDidMount(){
    this.props.loadCategorias()
  }

  render() {
    const { match } = this.props
    const { categorias } = this.props

    return(
      <div>
        <div className="row">

          <div className="col-md-2">
            <Link to={match.url + '/novo'}><span className='glyphicon glyphicon-edit'></span> Novo produto</Link>
            <h3>Categorias</h3>
            
            <ul style={{...this.estilo}}>
              { categorias.map(this.renderCategoria) }
            </ul>
            <div className='well well-sm'>
              <input onKeyUp={this.handleCategoria} type="text" ref='categoria' placeholder='insira nova categoria' className='form-control'/>
            </div>
          </div>

          <div className="col-md-10">
            <h1>Produtos</h1>
            <Route exact path={match.url} component={ProdutosHome} />
            <Route exact path={`${match.url}/novo`}  render={(props) =>( 
              <ProdutoNovo 
                {...props} 
                categorias={this.props.categorias}
                createProduto={this.props.createProduto}
                />
              )}  />
            <Route path={`${match.url}/categoria/:catId`} render={(props) => (
              <Categoria 
                {...props}
                loadProdutos = {this.props.loadProdutos}
                loadCategoria = {this.props.loadCategoria} 
              />
            )} />
          </div>

        </div>
      </div>
    )
  }
}