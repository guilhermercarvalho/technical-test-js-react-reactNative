import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'
import products from '../data'

export const listProducts =
  ({
    name = '',
    alphabetically = 'false',
    score = 'false',
    price = 'false',
    orderBy,
  } = {}) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    })
    try {
      const { data } = products

      const payload = {
        data: [...data],
        changed: false,
      }

      if (name !== '') {
        const regex = new RegExp(name, 'i')
        payload.data = data.filter((p) => regex.test(p.name))
        payload.changed = true
      }
      if (alphabetically === 'true') {
        payload.data.sort((a, b) => {
          const na = a.name.toLowerCase()
          const nb = b.name.toLowerCase()

          if (na < nb) {
            if (orderBy === 'desc') return 1
            return -1
          }
          if (na > nb) {
            if (orderBy === 'desc') return -1
            return 1
          }
          return 0
        })
        payload.changed = true
      }
      if (score === 'true') {
        payload.data.sort((a, b) => {
          if (orderBy === 'desc') return a.score - b.score
          return b.score - a.score
        })
        payload.changed = true
      }
      if (price === 'true') {
        payload.data.sort((a, b) => {
          if (orderBy === 'desc') return a.price - b.price
          return b.price - a.price
        })
        payload.changed = true
      }

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: payload.changed ? payload.data : data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.message,
      })
    }
  }

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
    payload: productId,
  })
  try {
    const { data } = products

    const product = data.find((p) => p.id === Number(productId))
    if (!product) throw new Error('produto não encontrado')

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    })
  }
}
