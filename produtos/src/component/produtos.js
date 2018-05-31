import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from './produtos/produtosHome'
import Categoria from './categoria/categoria';

export default class Produtos extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:3001/categorias')
      .then(res => {
        this.setState({categorias: res.data})
      })
  }
  renderCategoria(cat){
    return(
      <li key={cat.id}>
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.nome}</Link>
      </li>
    )
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