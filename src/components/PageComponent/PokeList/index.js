import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPokemons } from '../../../actions'
import PokeItem from '../PokeItem'
import './style.scss'

class PokeList extends Component {
  componentDidMount () {
    this.props.loadPokemons()
  }

  render () {
    const { pokemons } = this.props.pokemon
    const { limit, offset } = this.props.paginator.pagination

    return (
      <div >
        <ul className="pokeList">
          {pokemons.filter((item, index) => !!(index < limit && index >= offset)).map((poke) => <PokeItem key={poke.name} data={poke} />)}
        </ul>
      </div>
    )
  }
}

export default connect(({pokemon, filter, paginator}) => {
  const search = filter.search
  if (!search) return {pokemon, paginator}

  const filtered = pokemon.pokemons.filter(poke => {
    const re = new RegExp(search.toLowerCase(), 'g')
    return poke.name.toLowerCase().match(re)
  })
  return {pokemon: {pokemons: filtered}, paginator}
}, {loadPokemons})(PokeList)
