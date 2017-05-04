import { types } from '../constants'
import jquery from 'jquery'

const API_URL = 'http://pokeapi.co/api/v2/'
  // ?limit=20&offset=20
export function loadPokemons () {
  const settings = {
    url: `${API_URL}pokemon/?limit=999`,
    method: 'GET',
    dataType: 'json'
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_POKEMON_LIST})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.LOAD_POKEMON_LIST_OK, payload: {pokemons: response.results}}) })
      .fail(error => { dispatch({type: types.LOAD_POKEMON_LIST_FAIL, payload: {error}}) })
  }
}

export function loadPokemon (id) {
  const settings = {
    url: `${API_URL}pokemon/${id}`,
    method: 'GET',
    dataType: 'json'
  }
  return (dispatch) => {
    dispatch({type: types.REQUEST_POKEMON_PAGE})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.LOAD_POKEMON_PAGE_OK, payload: {pokemon: response}})
      })
      .fail(error => { dispatch({type: types.LOAD_POKEMON_PAGE_FAIL, payload: {error}}) })
  }
}

export function loadPokemonItem (url) {
  const settings = {
    url,
    method: 'GET',
    dataType: 'json'
  }
  return (dispatch) => {
    dispatch({type: types.REQUEST_POKEMON_ITEM})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.LOAD_POKEMON_ITEM_OK, payload: {pokemonItem: response}})
      })
      .fail(error => { dispatch({type: types.LOAD_POKEMON_ITEM_FAIL, payload: {error}}) })
  }
}
