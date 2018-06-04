import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './component/home'
import Sobre from './component/sobre'
import Produtos from './component/produtos'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: [],
      produtos: [],
      categoria: {}
    }
    this.loadCategorias = this.loadCategorias.bind(this)
    this.removeCategoria = this.removeCategoria.bind(this)
    this.createCategoria = this.createCategoria.bind(this)
    this.editCategoria = this.editCategoria.bind(this)
    
    this.createProduto = this.createProduto.bind(this)
    this.loadProduto = this.loadProduto.bind(this)
    this.loadCategoria = this.loadCategoria.bind(this)

  }
  loadCategoria(categoria){
    this.props.api.loadCategoria(categoria)
  }
  loadProduto(produto){
    this.props.api.loadProduto(produto)
  }
  createProduto(produto){
    return this.props.api.createProduto(produto)
  }

  loadCategorias(){
    this.props.api.loadCategorias()
      .then(res => this.setState({categorias: res.data}))
  }

  removeCategoria(categoria){
    this.props.api.deleteCategoria(categoria)
      .then(res => this.loadCategorias())
  }

  createCategoria(categoria){
    this.props.api.createCategoria(categoria)
      .then(res => this.loadCategorias())
  }

  editCategoria(categoria){
    this.props.api.editCategoria(categoria)
      .then(res => this.loadCategorias())
  }


  render() {
    return (
      <Router>
        <div>
            <nav className='navbar navbar-inverse'>
              <div className='container'>
                <div className='navbar-header'>
                  <a className='navbar-brand' href='/'>
                    Gerenciador de Produtos
                  </a>
                </div>
                <ul className='nav navbar-nav'>
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/produtos">produtos</Link></li>
                  <li><Link to="/sobre">sobre</Link></li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <Route exact path='/' component={Home} />
              <Route exact path='/sobre' component={Sobre} />
              <Route path='/produtos' render={(props) =>(  
                <Produtos {...props} 
                  loadCategorias={this.loadCategorias}
                  createCategoria={this.createCategoria}
                  removeCategoria={this.removeCategoria}
                  editCategoria={this.editCategoria}
                  createProduto={this.createProduto}
                  loadProduto={this.loadProduto}
                  loadCategoria={this.loadCategoria}
                  categorias={this.state.categorias}
                />)
                }/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
