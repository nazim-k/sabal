import { combineReducers } from 'redux';
import stock from './stock';
import companies from './companies';
import search from './search';
import company from './company';

const rootReducer = combineReducers({
  stock,
  companies,
  search,
  company
});

export default rootReducer