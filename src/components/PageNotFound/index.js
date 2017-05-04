import React, { Component } from 'react'
import { Link } from 'react-router'

class PageNotFound extends Component {
  render () {
    return (
      <div >
        <Link to='/'>На главную</Link>
      </div>
    )
  }
}

export default PageNotFound
