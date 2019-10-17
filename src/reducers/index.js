import { combineReducers } from 'redux';
import defaultStock from './defaultStock';
import companies from './companies';
import searchCompanies from './searchCompnanies';
import companyInfo from './companyInfo';
import companyComments from './companyComments';
import companyNews from './companyNews';

const rootReducer = combineReducers({
  defaultStock,
  companies,
  searchCompanies,
  companyInfo,
  companyComments,
  companyNews
});

export default rootReducer