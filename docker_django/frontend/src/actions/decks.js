import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import { tokenConfig } from './auth';

import { GET_DECKS, DELETE_DECK, ADD_DECK, GET_ERRORS } from './types';

//GET DECKS
 
export const getDecks = () => (dispatch, getState) => {
  axios.get('/api/decks/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DECKS,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}

//DELETE DECK

export const deleteDeck = id => (dispatch, getState) => {
  axios.delete(`/api/decks/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({deleteDeck: 'Deck deleted'}));
      dispatch({
        type: DELETE_DECK,
        payload: id
      });
    }).catch(err => console.log(err))
} 

//ADD DECK

export const addDeck = deck => (dispatch, getState) => {
  axios.post('/api/decks/', deck, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({addDeck: 'Deck added'}));
      dispatch({
        type: ADD_DECK,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}
