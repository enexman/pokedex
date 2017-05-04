import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../PageComponent/Loading'
import './style.scss'

class App extends Component {
  render () {
    return (
      <div >
        <Loading visible={this.props.loading.visible} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(({loading}) => ({loading}), {})(App)
