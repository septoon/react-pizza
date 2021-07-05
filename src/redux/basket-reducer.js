const ADD_PRICE = 'basket/ADD_PRICE'

const initialState = {
  priceCounter: 0
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return {...state,  priceCounter: action.price }
    default:
      return state
  }
}

export const addPriceCount = (price) => ({ type: ADD_PRICE, price })

export default basketReducer
