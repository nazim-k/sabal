import { combineReducers } from 'redux';
import defaultStock from './defaultStock';
import allCompanies from './allCompanies';
import searchCompanies from './searchCompnanies';

const rootReducer = combineReducers({
  defaultStock,
  allCompanies,
  searchCompanies
});

export default rootReducer