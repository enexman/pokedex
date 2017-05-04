import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { loadPokemon } from '../../../actions'
import './style.scss'

class PokeItem extends Component {
  render () {
    const { name, url } = this.props.data
    const id = parseInt(url.slice(33))
    return (
      <li className="pokeItem">
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </li>
    )
  }
}

export default connect(null, {loadPokemon})(PokeItem)
