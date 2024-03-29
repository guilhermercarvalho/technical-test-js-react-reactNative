import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_EMPTY,
} from '../constants/cartConstants'

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      const existItem = state.cartItems.find(
        (el) => el.product === item.product
      )
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.product === existItem.product ? item : el
          ),
        }
      }
      return { ...state, cartItems: [...state.cartItems, item] }
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el) => el.product !== action.payload
        ),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload }
    case CART_EMPTY:
      return { ...state, cartItems: [] }
    default:
      return state
  }
}

export default cartReducer
