const ADD_PIZZA_CART = 'cart/ADD_PIZZA_CART'
const REMOVE_PIZZA = 'cart/REMOVE_PIZZA'

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
    case REMOVE_PIZZA: {
      debugger
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1)
        ],
      }
    }
    default:
      return state
  }
}

export const addPizzaToCartAC = (pizzaObj) => ({ type: ADD_PIZZA_CART, payload: pizzaObj  })
export const removePizzaAC = (id) => ({ type: REMOVE_PIZZA, payload: id  })

export default cartReducer
