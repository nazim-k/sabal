import produce from 'immer';
import { setLoadingProps, setLoadingSuccessProps, setLoadingErrorProps } from './helpers';
import {
  LOAD_DEFAULT_STOCK,
  LOAD_DEFAULT_STOCK_SUCCESS,
  LOAD_DEFAULT_STOCK_FAILURE
} from '../actions';
import CONFIG from 'CONFIG';
const defaultStockTickers = CONFIG.defaultStockTickers;

const initialState = {
  data: defaultStockTickers, // In order to render cards with preloader pass default stock tickers
  lastUpdate: null,
  isLoading: true,
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