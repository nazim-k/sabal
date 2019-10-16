import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { searchCompaniesActionCreators } from '../actionCreators'
import { Search } from '../Components';
import { transformArrayOfObjectsToRows } from "../helpers";
import * as apiServer from '../apiServer';
import { debouncePause } from '../CONFIG'

const companiesData = ({ companies }) => companies;
const getCompanies = createSelector(
  [ companiesData ],
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
          .catch(({ response }) => searchCompaniesFailure(response) );

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

export default connect(
  ({ searchCompanies }) => {
    const { isLoading, failError } = searchCompanies;
    const { result: companies, links } = getCompanies(searchCompanies);
    return {
      companies,
      links,
      isLoading,
      failError
    }
  },
  searchCompaniesActionCreators
)(SearchContainer);