import React, {Component} from 'react'
import axios from 'axios'

class Agent extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      data: {}
    }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    axios
      .get('https://httpbin.org/user-agent')
      .then(res => {
        console.log(res.data['user-agent'])
        this.setState({
          isLoading: false,
          data: res.data
        })
      })
  }
  render(){
    if(this.state.isLoading && this.state.data) {
      return <div>Carregando... </div>
    }
    return(
      <div>
        OS: {this.state.data['user-agent']}
      </div>
    )
  }
}

export default Agent