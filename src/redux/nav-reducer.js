const TOGGLE_SWITCH = 'catalog/TOGGLE_SWITCH'

const initialState = {
  isOpen: false
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      debugger
      return {...state,  isOpen: action.isOpen }
    default:
      return state
  }
}

export const setIsOpenAC = (isOpen) => ({ type: TOGGLE_SWITCH, isOpen })

export default navReducer
