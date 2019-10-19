import {
  LOAD_COMPANY_INFO,
  LOAD_COMPANY_INFO_SUCCESS,
  LOAD_COMPANY_INFO_FAILURE
} from 'actions';
import * as apiServer from "apiServer";
import CONFIG from 'CONFIG';

const updateFrequency = CONFIG.company.info.updateFrequency*60*60;

export const loadCompanyInfo = ticker => (dispatch, getState) => {

  const state = getState();
  const company = state.company.info.data[ ticker ];

  if ( company && (new Date() - company.lastUpdate < updateFrequency)) {
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