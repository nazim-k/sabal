import {
  SEARCH_COMPANIES,
  SEARCH_COMPANIES_SUCCESS,
  SEARCH_COMPANIES_FAILURE,
  SEARCH_CLEAR_RESULTS,
  TOGGLE_SEARCH_VISIBILITY
} from 'actions';

const searchCompanies = () => ({ type: SEARCH_COMPANIES });

const searchCompaniesSuccess = companies => ({
  type: SEARCH_COMPANIES_SUCCESS,
  companies
});

const searchCompaniesFailure = error => ({
  type: SEARCH_COMPANIES_FAILURE,
  error: error.response || error.message
});

const clearSearchResults = () => ({ type: SEARCH_CLEAR_RESULTS });
const toggleSearchVisibility = () => ({ type: TOGGLE_SEARCH_VISIBILITY });

export default {
  searchCompanies,
  searchCompaniesSuccess,
  searchCompaniesFailure,
  clearSearchResults,
  toggleSearchVisibility
}