import { types } from '../constants'

export function doFilter (search) {
  return {
    type: types.FILTER_POKE,
    payload: {
      search
    }
  }
}
