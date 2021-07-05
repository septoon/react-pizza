import { combineReducers, createStore } from 'redux'
import basketReducer from './basket-reducer'
// import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'
import catalogReducer from './catalog-reducer'
import deliveryReducer from './delivery-reducer'
import teaCardReducer from './teaCard-reducer'

let reducers = combineReducers({
    catalogPage: catalogReducer,
    teaCardPage: teaCardReducer,
    priceCount: basketReducer,
    deliveryPage: deliveryReducer
})

export const store = createStore(reducers) // applyMiddleware for thunk

window.store = store
