import { types } from '../constants'

const initialState = {
  pokemons: [{
    name: '',
    url: ''
  }],
  pokemon: {
    height: '',
    weight: '',
    name: '',
    base_experience: '',
    sprites: {
      front_default: ''
    }
  },
  pokemonItem: {
    height: '',
    weight: '',
    name: '',
    base_experience: '',
    sprites: ''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POKEMON_LIST_OK:
      return {...state, pokemons: action.payload.pokemons}

    case types.LOAD_POKEMON_PAGE_OK:
      return {...state, pokemon: action.payload.pokemon}

    case types.LOAD_POKEMON_ITEM_OK:
      console.log('action.payload.pokemonItem', action.payload.pokemonItem)
      return {...state, pokemonItem: action.payload.pokemonItem}

    default:
      return state
  }
}
