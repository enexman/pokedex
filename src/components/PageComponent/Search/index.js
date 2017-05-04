import React, { Component } from 'react'
import { doFilter } from '../../../actions'

import { connect } from 'react-redux'
import './style.scss'

class Search extends Component {
  fnChange = (ev) => {
    this.props.doFilter(ev.target.value.toLowerCase())
  }

  render() {
    return (
      <div className="search">
        <input className='search__input' type='text' placeholder='search' onChange={this.fnChange} />
      </div>
    )
  }
}

export default connect(null, {doFilter})(Search)
