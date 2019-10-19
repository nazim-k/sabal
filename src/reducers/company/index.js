import { combineReducers } from 'redux';
import info from './info';
import comments from './comments';
import news from './news';

export default combineReducers({
  info,
  comments,
  news
})