import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.scss'

class Loading extends Component {
  render () {
    return (
      <div className="loader-wrapper" style={{display: (this.props.visible) ? 'flex' : 'none'}}>
        <div className="loader" ></div>
      </div>
    )
  }
}

export default connect(null, {})(Loading)
