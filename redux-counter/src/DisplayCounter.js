import React from 'react'
import { connect } from 'react-redux'

const DisplayCounter = ({count}) => {
  return <p>O contador esta em {count}</p>
}

const mapStateToProps = (state) => {
  return{count: state.count}
}

export default connect(mapStateToProps)(DisplayCounter)