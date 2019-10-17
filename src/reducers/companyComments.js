import produce from 'immer';
import { ADD_COMMENT } from '../actions';

const companyComments = [
  { username: 'user1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { username: 'user2', comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { username: 'user3', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nec feugiat nisl pretium fusce id velit ut tortor pretium.' },
  { username: 'user4', comment: 'Id donec ultrices tincidunt arcu non sodales. Sit amet est placerat in egestas erat imperdiet sed. Molestie a iaculis at erat pellentesque adipiscing commodo. Integer quis auctor elit sed vulputate mi sit amet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.' }
];

const initialState = {
  AAPL: companyComments
};

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