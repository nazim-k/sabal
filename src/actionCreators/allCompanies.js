import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_FAILURE,
  NEXT_COMPANIES_PAGE,
  PREVIOUS_COMPANIES_PAGE
} from '../actions';
import * as apiServer from "../apiServer";


const loadAllCompanies = () => (dispatch, getState) => {
  const { nextPage } = getState;

  dispatch({ type: LOAD_COMPANIES });
  //TODO if data.length !== 0 && there is no next page don't getAllCompanies
  apiServer.getAllCompanies(nextPage)
    .then(
      ({ data, nextPage }) => {
        if (data) dispatch({
          type: LOAD_COMPANIES_SUCCESS,
          data,
          nextPage
        });
        else dispatch({
          type: LOAD_COMPANIES_FAILURE,
          error: 'server response with nothing'
        });
      },
      error => dispatch({
        type: LOAD_COMPANIES_FAILURE,
        error: error.response
      })
    )

};

const nextCompaniesPage = () => ({
  type: NEXT_COMPANIES_PAGE
});

const prevCompaniesPage = () => ({
  type: PREVIOUS_COMPANIES_PAGE
});


export default {
  loadAllCompanies,
  nextCompaniesPage,
  prevCompaniesPage
};