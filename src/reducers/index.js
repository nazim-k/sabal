import { combineReducers } from 'redux';
import defaultStock from './defaultStock';
import allCompanies from './allCompanies';

const rootReducer = combineReducers({
  defaultStock,
  allCompanies
});

export default rootReducer