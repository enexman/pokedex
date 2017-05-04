import { types } from '../constants'

const initialState = {
  pagination: {
    limit: 15,
    offset: 0
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case types.PAGINATION:
      return {...state, pagination: payload}

    default:
      return state
  }
}
