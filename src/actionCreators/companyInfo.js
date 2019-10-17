import {
  LOAD_COMPANY_INFO,
  LOAD_COMPANY_INFO_SUCCESS,
  LOAD_COMPANY_INFO_FAILURE
} from '../actions';
import * as apiServer from "../apiServer";

export const loadCompanyInfo = ticker => (dispatch, getState) => {

  const { companyInfo } = getState();
  const company = companyInfo.data[ ticker ];

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
        error => {
          console.group('api server company info response');
          console.dir(error);
          console.groupEnd();
          dispatch({
            type: LOAD_COMPANY_INFO_FAILURE,
            error: error.response || error.message
          })
        }
      )
  }

};

export default {
  loadCompanyInfo
}