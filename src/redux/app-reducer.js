const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
          debugger
            return { ...state, initialized: true }      
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS } )


export default appReducer