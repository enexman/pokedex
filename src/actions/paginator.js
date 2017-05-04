import { types } from '../constants'

export function doPagination (limit, offset) {
  return {
    type: types.PAGINATION,
    payload: {
      limit, offset
    }
  }
}
