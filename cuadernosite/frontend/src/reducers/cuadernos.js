import { GET_CUADERNOS, DELETE_CUADERNO, ADD_CUADERNO, LOGOUT_SUCCESS } from '../actions/types';


const initialState = {
  cuadernos: []
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_CUADERNOS: 
      return {
        ...state,
        cuadernos: action.payload
      };
    case DELETE_CUADERNO: 
      return {
        ...state,
        cuadernos: state.cuadernos.filter(cuaderno => cuaderno.id !== action.payload)
      };
    case ADD_CUADERNO: 
      return {
        ...state,
        cuadernos: [...state.cuadernos, action.payload]
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        cuadernos: []
      }
    default:
      return state;
  }
}