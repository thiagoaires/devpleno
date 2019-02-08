import React, { Component } from 'react'
import axios from 'axios'
const withHTTP = url => WrappedComponent => {
  return class extends Component {


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
      .get(url)
      .then(res => this.setState({
        isLoading: false,
        data: res.data}
      ))
  }

    render(){
      return (
        <div>
          HOC: <WrappedComponent
                  isLoading={this.state.isLoading}
                  data={this.state.data}
                  {...this.props}
                />
        </div>
      )
    }
  }
}

export default withHTTP