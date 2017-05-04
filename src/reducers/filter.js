import { types } from '../constants'

const initialState = {}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case types.FILTER_POKE:
      return {...state, search: payload.search}

    default:
      return state
  }
}
