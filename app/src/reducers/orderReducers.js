import { ORDER_CREATE, ORDER_CREATE_RESET } from '../constants/orderConstants'

const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_CREATE: {
      return {
        orders: [...state.orders, action.payload],
        success: true,
      }
    }
    case ORDER_CREATE_RESET:
      return { ...state, success: false }
    default:
      return state
  }
}

export default orderReducer
