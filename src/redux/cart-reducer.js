const ADD_PIZZA_CART = 'cart/ADD_PIZZA_CART'

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      let newState =  {
        ...state, 
        items: [...state.items, action.payload],
      }

      let newTotalPrice = 0

      newState.items.forEach(item => newTotalPrice += parseInt(item.activePrice) )
      
      newState.totalCount = newState.items.length

      newState.totalPrice = newTotalPrice

      return newState
    }
    default:
      return state
  }
}

export const addPizzaToCartAC = (pizzaObj) => ({ type: ADD_PIZZA_CART, payload: pizzaObj  })

export default cartReducer
