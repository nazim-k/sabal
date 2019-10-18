import { combineReducers } from 'redux';
import stock from './stock';
import companies from './companies';
import search from './search';
import info from './info';
import comments from './comments';
import news from './news';

const rootReducer = combineReducers({
  stock,
  companies,
  search,
  info,
  comments,
  news
});

export default rootReducer