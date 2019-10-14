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
  failError: ''
};

export default function defaultReducer(state=initialState, action) {
  switch (action.type) {
    case LOAD_DEFAULT_STOCK:
      return { ...state, isLoading: true, isFail: false };
    case LOAD_DEFAULT_STOCK_SUCCESS:
      return { ...state, data: action.data, isLoading: false, isFail: false, lastUpdate: new Date() };
    case LOAD_DEFAULT_STOCK_FAILURE:
      return { ...state, isFail: true, failError: action.error };
    default:
      return state;
  }
}