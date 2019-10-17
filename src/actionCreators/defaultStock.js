import { LOAD_DEFAULT_STOCK, LOAD_DEFAULT_STOCK_SUCCESS, LOAD_DEFAULT_STOCK_FAILURE } from '../actions';
import { defaultStockTickers } from '../CONFIG';
import * as apiServer from '../apiServer';

const loadDefaultStock = ticker => dispatch => {

  dispatch({ type: LOAD_DEFAULT_STOCK });

  apiServer.getStockPricesByTicker(ticker || defaultStockTickers)
    .then(
      response => dispatch({
        type: LOAD_DEFAULT_STOCK_SUCCESS,
        data: response
      }),
      error => dispatch({
        type: LOAD_DEFAULT_STOCK_FAILURE,
        error: error.response || error.message
      })
    )

};


export default {
  loadDefaultStock
};