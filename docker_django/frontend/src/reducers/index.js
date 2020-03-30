import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import decks from './decks';
import cards from './cards';
import fileLoader from './fileLoader';

export default combineReducers({
  errors,
  messages,
  auth,
  decks,
  cards,
  fileLoader
});