import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './produtos/produtosHome'
import Categoria from './categoria/categoria';


export default class Produtos extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    this.handleCategorias = this.handleCategorias.bind(this)
    this.renderCategoria = this.renderCategoria.bind(this)
    this.removeCategoria = this.removeCategoria.bind(this)
  }

  removeCategoria(categoria){
    // Api.deleteCategoria(categoria)
    //   .then(res => this.loadCategorias())
  }
  renderCategoria(cat){
    return(
      <li key={cat.id}>
        <button className='btn btn-primary btn-xs' onClick={() => this.removeCategoria(cat.id)}>
          <span className='glyphicon glyphicon-remove'></span>
        </button> 
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.nome}</Link>
      </li>
    )
  }
  handleCategorias(e){
    if (e.keyCode === 13){
      // Api.cadastrarCategoria({nome: this.refs.categoria.value})
      //   .then(res => this.loadCategorias())

      this.refs.categoria.value = ''
    }
  }

  componentDidMount(){
    //this.props.loadCategorias()
  }

  render() {
    const { match } = this.props

    return(
      <div>
        <div className="row">

          <div className="col-md-2">
            <h3>Categorias</h3>
            <ul>
              {
                this.state.categorias.map(this.renderCategoria)

              }
            </ul>
            <div className='well well-sm'>
              <input onKeyUp={this.handleCategorias} type="text" ref='categoria' placeholder='insira nova categoria' className='form-control'/>
            </div>
          </div>

          <div className="col-md-10">
            <h1>Produtos</h1>
            <Route exact path={match.url} component={ProdutosHome} />
            <Route path={`${match.url}/categoria/:catId`} component={Categoria} />
          </div>

        </div>
      </div>
    )
  }
}