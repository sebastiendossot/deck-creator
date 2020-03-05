import { GET_DECKS, DELETE_DECK, ADD_DECK, LOGOUT_SUCCESS } from '../actions/types';


const initialState = {
  decks: []
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_DECKS: 
      return {
        ...state,
        decks: action.payload
      };
    case DELETE_DECK: 
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== action.payload)
      };
    case ADD_DECK: 
      return {
        ...state,
        decks: [...state.decks, action.payload]
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        decks: []
      }
    default:
      return state;
  }
}