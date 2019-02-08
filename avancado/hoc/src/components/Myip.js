import React from 'react'
import withHTTP from '../withHTTP'

const MyIP = props => {
  if(props.isLoading && props.data){
    return <div>Carregando...</div>
  } else {
    return(
      <div style={props.style}>
        My ip: {props.data.origin}
      </div>
    )
  }
}

export default withHTTP('https://httpbin.org/ip')(MyIP)