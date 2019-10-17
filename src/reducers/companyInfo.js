import {
  LOAD_COMPANY_INFO,
  LOAD_COMPANY_INFO_SUCCESS,
  LOAD_COMPANY_INFO_FAILURE
} from '../actions';
import produce from 'immer';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers';

const initialState = {
  data: {},
  isLoading: true,
  failError: null
};

/*
There is no need to normalize Company page data (Company Info, Comments, Related News)
Because the only query we need is - companyPageData[ticker];
So we can separate company page data into 3 reduces and grab data by ticker:
1. companyInfo
2. companyComments
3. news
 */

export default produce((state=initialState, action) => {

  switch (action.type) {
    case LOAD_COMPANY_INFO:
      setLoadingProps(state);
      return state;
    case LOAD_COMPANY_INFO_SUCCESS:
      const { info } = action;
      if (!info) return state;
      setLoadingSuccessProps(state, false);
      if (action.info) {
        info.lastUpdate = new Date();
        state.data[info.ticker] = info;
      }
      return state;
    case LOAD_COMPANY_INFO_FAILURE:
      setLoadingErrorProps(state, action.error);
      return state;
    default:
      return state;
  }

});