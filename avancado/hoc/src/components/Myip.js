import React, {Component} from 'react'
import axios from 'axios'

class Myip extends Component{

  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      data: {}
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true})
    axios
      .get('https://httpbin.org/ip')
      .then(res => this.setState({
                                  isLoading: false,
                                  data: res.data}
                                ))
  }

  render(){
    if(this.state.isLoading && this.state.data){
      return <div>Carregando...</div>
    } else {
      return(
        <div>
          My ip: {this.state.data.origin}
        </div>
      )
    }
  }
}

export default Myip