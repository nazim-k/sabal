import {
  LOAD_COMPANY_NEWS,
  LOAD_COMPANY_NEWS_SUCCESS,
  LOAD_COMPANY_NEWS_FAILURE,
} from '../actions';
import * as apiServer from '../apiServer';

const loadCompanyNews = ({ ticker, shouldUpdateExistingNews=false }) => (dispatch, getState) => {
  const { nextPage, data } = getState().companyNews;

  if (!shouldUpdateExistingNews && data[ticker]) {

    dispatch({ type: LOAD_COMPANY_NEWS_SUCCESS });

  } else {

    dispatch({ type: LOAD_COMPANY_NEWS });

    apiServer.getCompanyNews(ticker, nextPage)
      .then(
        ({ news, next_page }) => dispatch({
          type: LOAD_COMPANY_NEWS_SUCCESS,
          ticker,
          news,
          nextPage: next_page,
        }),
        error => dispatch({
          type: LOAD_COMPANY_NEWS_FAILURE,
          error: error.response || error.message
        })
      )
  }

};

export default {
  loadCompanyNews
}