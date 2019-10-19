import produce from 'immer';
import {
  LOAD_COMPANY_NEWS,
  LOAD_COMPANY_NEWS_SUCCESS,
  LOAD_COMPANY_NEWS_FAILURE
} from '../actions';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers';

const initialState = {
  data: {},
  nextPage: '',
  isLoading: true,
  failError: null
};

export default produce((state=initialState, action) => {

  switch (action.type) {

    case LOAD_COMPANY_NEWS:
      setLoadingProps(state);
      return state;
    case LOAD_COMPANY_NEWS_SUCCESS:
      const { ticker, news } = action;
      //Return state if needed news already loaded
      if (!news) return state;
      setLoadingSuccessProps(state, false);
      if (!state.data[ticker]) state.data[ticker] = [];
      state.data[ticker].push( ...news );
      state.nextPage = action.nextPage;
      return state;
    case LOAD_COMPANY_NEWS_FAILURE:
      setLoadingErrorProps(state, action.error);
      return state;
    default:
      return state;

  }

})