import produce from 'immer';
import {
  SEARCH_COMPANIES,
  SEARCH_COMPANIES_SUCCESS,
  SEARCH_COMPANIES_FAILURE,
  SEARCH_CLEAR_RESULTS,
  TOGGLE_SEARCH_VISIBILITY
} from 'actions';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from '../helpers'

const initialState = {
  companies: [],
  isLoading: false,
  failError: null,
  visibility: false
};

export default produce((state=initialState, action) => {

  switch (action.type) {

    case SEARCH_COMPANIES:
      setLoadingProps(state);
      return state;
    case SEARCH_COMPANIES_SUCCESS:
      setLoadingSuccessProps(state, false);
      state.companies = action.companies;
      return state;
    case SEARCH_COMPANIES_FAILURE:
      setLoadingErrorProps(state, action.error);
      state.companies = [];
      return state;
    case SEARCH_CLEAR_RESULTS:
      setLoadingSuccessProps(state, false);
      state.companies = [];
      return state;
    case TOGGLE_SEARCH_VISIBILITY:
      state.visibility = !state.visibility;
      return state;
    default:
      return state;

  }

})