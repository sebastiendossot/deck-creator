import { GET_CARDS, DELETE_CARD, ADD_CARD, LOGOUT_SUCCESS } from '../actions/types';


const initialState = {
  cards: [],
  deck: 0
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_CARDS: 
      return {
        ...state,
        cards: action.payload,
        deck: parseInt(action.deck)
      };
    case DELETE_CARD: 
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      };
    case ADD_CARD: 
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        cards: [],
        deck: 0
      }
    default:
      return state;
  }
}