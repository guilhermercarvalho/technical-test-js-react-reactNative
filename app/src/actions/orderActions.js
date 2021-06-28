import { CART_EMPTY } from '../constants/cartConstants'
import { ORDER_CREATE } from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  const newOrder = order
  delete newOrder.cartItems
  newOrder.id = Date.now()

  dispatch({ type: ORDER_CREATE, payload: order })
  dispatch({ type: CART_EMPTY })
  localStorage.setItem('orders', JSON.stringify(getState().order.orders))
  localStorage.removeItem('cartItems')
}

export default { createOrder }
