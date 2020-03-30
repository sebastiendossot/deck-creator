import { TEST_JSON } from '../actions/types';


const initialState = {
  json: null
}

export default function(state = initialState, action){
  switch(action.type){
    case TEST_JSON: 
      return {
        ...state,
        json: action.json
      };
    default:
      return state;
  }
}