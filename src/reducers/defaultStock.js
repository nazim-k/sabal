import produce from 'immer';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers'
import { defaultStockTickers } from '../CONFIG';
import {
  LOAD_DEFAULT_STOCK,
  LOAD_DEFAULT_STOCK_SUCCESS,
  LOAD_DEFAULT_STOCK_FAILURE
} from '../actions';

const initialState = {
  data: defaultStockTickers,
  lastUpdate: null,
  isLoading: true,
  isFail: false,
  failError: null
};

export default produce((state=initialState, action) => {
  switch (action.type) {
    case LOAD_DEFAULT_STOCK:
      setLoadingProps(state);
      return;
    case LOAD_DEFAULT_STOCK_SUCCESS:
      setLoadingSuccessProps(state);
      state.data = action.data;
      return state;
    case LOAD_DEFAULT_STOCK_FAILURE:
      setLoadingErrorProps(state, action.error);
      return state;
    default:
      return state;
  }
})