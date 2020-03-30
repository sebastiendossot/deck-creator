import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import { tokenConfig } from './auth';

import example from '../data/example.json';

import { ADD_DECK, ADD_CARD, TEST_JSON } from './types';


// By default loads the example file
export const loadFile = (file, isExample) => (dispatch, getState) => {
  // dispatch({
  //         type: TEST_JSON,
  //         json: "I am the thiiingy"
  //       });
  console.log(example)
  Object.keys(example).forEach(function(key) {
    console.log("I am the key", key);
    const deck = {title: key};
    axios.post('/api/decks/', deck, tokenConfig(getState))
    .then(res => {
      console.log("I am the result",res.data)

      dispatch({
        type: ADD_DECK,
        payload: res.data
      });
      
      const deckId = res.data.id;

      Object.keys(example[key]).forEach(function(key2) {
        const jsonCard = example[key][key2];
        const card = {question: jsonCard.question, answer: jsonCard.answer, deck: deckId};
        axios.post('/api/cards/', card, tokenConfig(getState))
        .then(res => {
          // see if we return anything
          dispatch({
            type: ADD_CARD,
            payload: res.data
          });
        }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
      })
     
    }).catch(err => console.log(err))
    
    //.catch(err => dispatch(returnErrors(err.response.data,err.response.status)))

  });
 
}