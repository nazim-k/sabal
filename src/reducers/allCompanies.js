import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_FAILURE,
  PREVIOUS_COMPANIES_PAGE,
  NEXT_COMPANIES_PAGE
} from '../actions';

const initialState = {
  data: [],
  isLoading: true,
  isFail: false,
  currentPageIndex: 0,
  nextPage: ''
};

export default function allCompaniesReducer(state=initialState, action) {
  switch (action.type) {
    case LOAD_COMPANIES:
      return { ...state, isLoading: true };
    case LOAD_COMPANIES_SUCCESS:
      return {
        ...state,
        data: [ ...state.data, action.companies ],
        nextPage: action.nextPage,
        currentPageIndex: state.data.length // Added one element to array, so last index equal to old array length
      };
    case LOAD_COMPANIES_FAILURE:
      return { ...state, isFail: true };
    case PREVIOUS_COMPANIES_PAGE:
      const pageIndex = state.currentPageIndex > 1
        ? state.currentPageIndex -1
        : 0;
      return { ...state, currentPageIndex: pageIndex };
    case NEXT_COMPANIES_PAGE:
      if (state.currentPageIndex < state.data.length - 1)
        return { ...state, currentPageIndex: state.currentPageIndex + 1 };
      return state;
    default:
      return state;

  }
}