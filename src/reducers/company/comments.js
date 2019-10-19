import produce from 'immer';
import { ADD_COMMENT } from '../actions';

const initialState = {};

export default produce((state=initialState, action) => {

  if (action.type === ADD_COMMENT) {
    const { ticker, username, comment } = action;
    if (!state[ticker]) state[ticker] = [];
    state[ticker].push({ username, comment });
    //save comments
    localStorage.setItem(ticker, JSON.stringify(state[ticker]));
    return state
  }

  return state;
})