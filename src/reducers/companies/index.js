import produce from 'immer';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers';
import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_FAILURE,
  PREVIOUS_COMPANIES_PAGE,
  NEXT_COMPANIES_PAGE
} from 'actions';

const initialState = {
  data: [],
  isLoading: true,
  currentPageIndex: 0,
  nextPage: '',
  failError: null
};

export default produce(( state=initialState, action ) => {
  switch (action.type) {
    case LOAD_COMPANIES:
      setLoadingProps(state);
      return state;
    case LOAD_COMPANIES_SUCCESS:
      const page = state.data.length;
      setLoadingSuccessProps(state, false);
      state.data.push( action.data );
      state.nextPage = action.nextPage;
      state.currentPageIndex = page;// Added one element to array, so last index equal to old array length
      return state;
    case LOAD_COMPANIES_FAILURE:
      setLoadingErrorProps(state, action.error);
      return state;
    case PREVIOUS_COMPANIES_PAGE:
      if (state.currentPageIndex === 0) return state;
      state.currentPageIndex -= 1;
      return state;
    case NEXT_COMPANIES_PAGE:
      state.currentPageIndex += 1;
      return state;
    default:
      return state;

  }
})