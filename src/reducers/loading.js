import { types } from '../constants'

const initialState = {
  visible: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_POKEMON_LIST:
    case types.LOAD_POKEMON_LIST_FAIL:
    case types.REQUEST_POKEMON_ITEM:
    case types.LOAD_POKEMON_ITEM_FAIL:
    case types.REQUEST_POKEMON_PAGE:
    case types.LOAD_POKEMON_PAGE_FAIL:
      return {...state, visible: true}

    case types.LOAD_POKEMON_LIST_OK:
    case types.LOAD_POKEMON_ITEM_OK:
    case types.LOAD_POKEMON_PAGE_OK:
      return {...state, visible: false}

    default:
      return state
  }
}
