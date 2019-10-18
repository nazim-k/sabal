import {
  LOAD_COMPANY_INFO,
  LOAD_COMPANY_INFO_SUCCESS,
  LOAD_COMPANY_INFO_FAILURE
} from '../actions';
import * as apiServer from "../apiServer";

export const loadCompanyInfo = ticker => (dispatch, getState) => {

  const { info } = getState();
  const company = info.data[ ticker ];

  if ( company && (new Date() - company.lastUpdate < 86400)) {
    dispatch({ type: LOAD_COMPANY_INFO_SUCCESS });
  } else {
    dispatch({ type: LOAD_COMPANY_INFO });

    apiServer.getCompanyInfo(ticker)
      .then(
        info => dispatch({
          type: LOAD_COMPANY_INFO_SUCCESS,
          info
        }),
        error => dispatch({
          type: LOAD_COMPANY_INFO_FAILURE,
          error: error.response || error.message
        })
      )
  }

};

export default {
  loadCompanyInfo
}