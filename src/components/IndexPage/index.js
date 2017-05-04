import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokeList from '../PageComponent/PokeList'
import Paginator from '../PageComponent/Paginator'
import Search from '../PageComponent/Search'
import './style.scss'

class IndexPage extends Component {
  render () {
    return (
      <div className="container" >
        <div>
          <Search />
          <PokeList />
        </div>
        <Paginator />
      </div>
    )
  }
}

export default connect(null, {})(IndexPage)
