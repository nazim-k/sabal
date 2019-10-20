import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { searchActionCreators } from 'actionCreators'
import { Search } from 'Components';
import { transformArrayOfObjectsToRows } from "helpers";
import * as apiServer from 'apiServer';
import CONFIG from 'CONFIG'

const { debouncePause } = CONFIG;

function useQuery() {
  const [ value, setValue ] = useState('');
  const handleChange = e => {
    if (typeof e === 'string') setValue(e);
    else setValue(e.target.value);
  };
  return [ value, handleChange ]
}

function SearchContainer({ searchCompanies, searchCompaniesSuccess, searchCompaniesFailure, clearSearchResults, ...props }) {
  const [ query, setQuery ] = useQuery();

  useEffect(() => {
    let shouldUpdateReduxStore = true;
    if (query) {
      const search = setTimeout( () => {

        apiServer.searchCompanies(query)
          .then( companies => {
            // Don't update redux store if query changed when client already send request to the server
            if ( shouldUpdateReduxStore )
              searchCompaniesSuccess(companies);
          })
          .catch(searchCompaniesFailure);

        if (shouldUpdateReduxStore) searchCompanies(query);
      }, debouncePause );

      return () => {
        clearInterval(search);
        shouldUpdateReduxStore = false;
      }
    }
    clearSearchResults();
  }, [ query, searchCompanies, searchCompaniesSuccess, searchCompaniesFailure, clearSearchResults ]);

  return <Search { ...props } query={ query } setQuery={ setQuery }/>

}

SearchContainer.propTypes = {
  searchCompanies: PropTypes.func.isRequired,
  searchCompaniesSuccess: PropTypes.func.isRequired,
  searchCompaniesFailure: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
};

const getCompanies = createSelector(
  search => search.companies,
  companiesData => {
    //Because the array is frozen in strict mode, we need to copy the array before sorting it
    const companies = companiesData.slice().sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });

    return transformArrayOfObjectsToRows(companies);
  }
);

export default connect(
  ({ search }) => {
    const { isLoading, failError } = search;
    const { result, links } = getCompanies(search);
    return {
      companies: result,
      links,
      isLoading,
      failError
    }
  },
  searchActionCreators
)(SearchContainer);