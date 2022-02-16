// import { createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   items: {},
//   totalPrice: 0,
//   totalCount: 0
// }

// const addToCart = createAction('ADD_TO_CART')

// export default createReducer(initialState, {
//   [addToCart]: state => {
//     state.items = state.items.push()
//   }
// })

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0 
  },
  reducers: {
    addToCart(state, action) {
      debugger
      state.items += action.payload;
    },
    setTotalCount(state) {
      state.totalCount += 1
    }
  }
})

export default cartSlice.reducer

export const { addToCart, setTotalCount } = cartSlice.actions
