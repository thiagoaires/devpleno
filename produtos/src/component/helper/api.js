import axios from 'axios'

const instancia = axios.create({
  baseURL: 'http://localhost:3001/'
})
const Api = {
  loadCategoria: (id) => instancia.get(`categorias/${id}`), 
  loadCategorias: () => instancia.get('categorias'),
  loadProdutos: (id) => instancia.get('produtos?categoria=' + id), 
  deleteCategoria: (id) => instancia.delete('categorias/' + id),
  cadastrarCategoria: (obj) => instancia.post('categorias', obj)
}

export default Api