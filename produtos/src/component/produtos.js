import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './produtos/produtosHome'
import Categoria from './categoria/categoria';


export default class Produtos extends Component {
  constructor(props){
    super(props)
 
    this.state = {
      editingCategoria: ''
    }
  
    this.renderCategoria = this.renderCategoria.bind(this)
    this.handleCategoria = this.handleCategoria.bind(this)

    this.estlilo = {
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
      <button className='btn btn-primary btn-xs' onClick={() => this.props.removeCategoria(cat.id)}>
        <span className='glyphicon glyphicon-remove'></span>
      </button>
      <button className='btn btn-primary btn-xs' onClick={() => this.editCategoria(cat.id)}>
        <span className='glyphicon glyphicon-pencil'></span>
      </button> 
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.nome}</Link>
      </li>
    )
  }
  handleCategoria(e){
    if (e.keyCode === 13){
      this.props.createCategoria({nome: this.refs.categoria.value})
      this.refs.categoria.value = ''
    }
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
            <h3>Categorias</h3>
            
            <ul style={{...this.estlilo}}>
              { categorias.map(this.renderCategoria) }
            </ul>
            <div className='well well-sm'>
              <input onKeyUp={this.handleCategoria} type="text" ref='categoria' placeholder='insira nova categoria' className='form-control'/>
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