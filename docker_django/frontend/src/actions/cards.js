import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import { tokenConfig } from './auth';

import { GET_CARDS, DELETE_CARD, ADD_CARD, GET_ERRORS } from './types';

//GET CARDS

//Id du deck

export const getCards = id => (dispatch, getState) => {
  const deckId = id;
  axios.get(`/api/cards/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CARDS,
        payload: res.data,
        deck: deckId
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}

//DELETE CARD

export const deleteCard = id => (dispatch, getState) => {
  axios.delete(`/api/cards/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({deleteCard: 'Card deleted'}));
      dispatch({
        type: DELETE_CARD,
        payload: id
      });
    }).catch(err => console.log(err))
} 

//ADD CARD

export const addCard = card => (dispatch, getState) => {
  axios.post('/api/cards/', card, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({addCard: 'Card added'}));
      dispatch({
        type: ADD_CARD,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}


//ADD CARD - used to import files

export const addCardFromFile = card => (dispatch, getState) => {
  axios.post('/api/cards/', card, tokenConfig(getState))
    .then(res => {
      // see if we return anything
      dispatch({
        type: ADD_CARD,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}
