const ADD_PIZZA_CART = 'cart/ADD_PIZZA_CART'
const SET_TOTAL_COUNT = 'cart/SET_TOTAL_COUNT'
const SET_TOTAL_PRICE = 'cart/SET_TOTAL_PRICE'

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

      let newTotal = 0;

      newState.items.forEach(item => newTotal += parseInt(item.activePrice) )

      newState.totalPrice = newTotal

      return newState
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state, totalCount: action.payload
      }
    }
    default:
      return state
  }
}

export const addPizzaToCartAC = (pizzaObj) => ({ type: ADD_PIZZA_CART, payload: pizzaObj  })
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, payload: count })

export default cartReducer


// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PIZZA_CART: {
//       const newItems = {
//         ...state.items, 
//         [action.payload.id]: !state.items[action.payload.id] 
//             ? [action.payload ] : [ ...state.items[action.payload.id], action.payload ]
//         } 
//       return {
//         ...state,  
//         items: newItems,
//         totalCount: Object.keys(state.items).length
//       }
//     }
//     case SET_TOTAL_COUNT:
//       return {...state,  totalCount: action.payload }
//     default:
//       return state
//   }
// }