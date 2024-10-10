import { ADD_TODO, DELETE_TODO, GET_TODO } from "./ActionType"

const  initialState= {
  product : []
}

export default function Reducer(state = initialState ,action) {

    switch (action.type){
      case ADD_TODO : 
        return {...state , product : [...state.product , action.payload]}
      case GET_TODO : 
        return {...state, product : action.payload}
      case DELETE_TODO :
        return {...state, product : state.product.filter(product => product.id !== action.payload)}
      default :
        return state
    }
  
}

