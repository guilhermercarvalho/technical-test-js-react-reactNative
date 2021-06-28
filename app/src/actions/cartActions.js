import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'
import products from '../data'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = products

  const product = data.find((p) => p.id === Number(productId))

  if (!product) {
    dispatch({ type: CART_EMPTY })
  } else {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: product.id,
        name: product.name,
        price: product.price,
        score: product.score,
        image: product.image,
        qty,
      },
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
