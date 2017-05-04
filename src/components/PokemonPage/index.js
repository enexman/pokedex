import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPokemon } from '../../actions'
import './style.scss'

class PokemonPage extends Component {
  componentDidMount () {
    this.props.loadPokemon(this.props.params.id)
  }

  render () {
    const { name, base_experience: baseExperience, height, weight, sprites } = this.props.pokemon.pokemon

    return (
      <div className="pokemon-page">
        <div className="pokemon-page__wrap">
          <img src={sprites.front_default} width="96" headers="96" alt="avatar"/>
          <h2 className="pokemon-page__title">{name}</h2>
        </div>
        <ul className="pokemon-page__list">
          <li className="pokemon-page__item"><span>Experience: </span>{baseExperience}</li>
          <li className="pokemon-page__item"><span>Height: </span>{height}</li>
          <li className="pokemon-page__item"><span>Weight: </span>{weight}</li>
        </ul>
      </div>
    )
  }
}

export default connect(({pokemon}) => ({pokemon}), {loadPokemon})(PokemonPage)
