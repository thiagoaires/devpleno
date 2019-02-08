import React from 'react'

import withHTTP from '../withHTTP'

const MyAgent = props => {
  if(props.isLoading && props.data) {
    return <div>Carregando... </div>
  }
  return(
    <div>
      OS: {props.data['user-agent']}
    </div>
  )
}

export default withHTTP('https://httpbin.org/user-agent')(MyAgent)