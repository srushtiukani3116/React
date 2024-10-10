import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO } from "./ActionType"
const initialState = {
  todo: []
}

export default function Reducer(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
      return { ...state, todo: [...state.todo, action.payload] };

    case GET_TODO:
      return {...state,todo: action.payload};

    case EDIT_TODO:
        return {...state, todo: state.todo.map(todo => todo.id === action.payload.id ? action.payload : todo)};
        
    case DELETE_TODO:
        return {...state,todo: state.todo.filter(todo => todo.id !== action.payload)};
        
    default:
      return state
  }

}

