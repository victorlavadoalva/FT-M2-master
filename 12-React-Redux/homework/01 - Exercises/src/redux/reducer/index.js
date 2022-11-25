import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types"

const initialState = {
  list: []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, payload]
            }
            
        case DELETE_PRODUCT:
            const filtered = state.list.filter(
                (p) => p.id !== payload
            )
            return {
                ...state,
                list: filtered
            }

        default:
            return state;
    }
}

export default rootReducer
