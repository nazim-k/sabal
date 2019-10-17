import produce from 'immer';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers';
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
  currentPageIndex: 0,
  nextPage: null,
  failError: null
};

//TODO: fail error and isFail replace with one key. failErro

export default produce(( state=initialState, action ) => {
  switch (action.type) {
    case LOAD_COMPANIES:
      setLoadingProps(state);
      return state;
    case LOAD_COMPANIES_SUCCESS:
      const page = state.data.length;
      setLoadingSuccessProps(state);
      state.data.push( action.data );
      state.nextPage = action.nextPage;
      state.currentPageIndex = page;// Added one element to array, so last index equal to old array length
      return state;
    case LOAD_COMPANIES_FAILURE:
      setLoadingErrorProps(state, action.error);
      return state;
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
})

// export default function allCompaniesReducer(state=initialState, action) {
//   switch (action.type) {
//     case LOAD_COMPANIES:
//       return { ...state, isLoading: true, failError: null };
//     case LOAD_COMPANIES_SUCCESS:
//       return {
//         ...state,
//         data: [ ...state.data, [ ...action.data ] ],
//         nextPage: action.nextPage,
//         currentPageIndex: state.data.length, // Added one element to array, so last index equal to old array length
//         isLoading: false,
//         failError: null
//       };
//     case LOAD_COMPANIES_FAILURE:
//       return { ...state, isLoading: false, failError: action.error };
//     case PREVIOUS_COMPANIES_PAGE:
//       const pageIndex = state.currentPageIndex > 1
//         ? state.currentPageIndex -1
//         : 0;
//       return { ...state, currentPageIndex: pageIndex };
//     case NEXT_COMPANIES_PAGE:
//       if (state.currentPageIndex < state.data.length - 1)
//         return { ...state, currentPageIndex: state.currentPageIndex + 1 };
//       return state;
//     default:
//       return state;
//
//   }
// }