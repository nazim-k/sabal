import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Skeleton from 'react-loading-skeleton';
import { allCompaniesActionCreators } from '../../actionCreators';
import ErrorMessage from '../ErrorMessage';
import { FlexSection, FlexRow, Table, Title } from '../CommonStyled';
import { transformArrayOfObjectsToRows } from '../../helpers';


const keyToRender = [ 'name', 'ticker', 'lei' ];
const headers = [ 'Company\'s common name', 'Stock market ticker', 'Legal Entity Identifier' ];

//TODO extract connect with mapState & mapDispatch to Containers folder

function Companies({ companies, shouldLoadAllCompanies, isLoading, failError, loadAllCompanies, nextCompaniesPage, prevCompaniesPage }) {

  useEffect(() => {
    if (shouldLoadAllCompanies)
      loadAllCompanies();
  }, [loadAllCompanies, shouldLoadAllCompanies]);

  const { result: rows, links } = transformArrayOfObjectsToRows({ data: companies, keys: keyToRender, link: 'ticker' });

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexRow>
    <FlexSection width="80%">
      <Title>All Companies</Title>
      {
        isLoading
          ? <Skeleton count={ 30 } width="100%"/>
          : <Table headers={ headers } rows={ rows } links={ links } isLoading={ isLoading }/>
      }
    </FlexSection>
  </FlexRow>

}


//  CONNECT COMPNENT TO REDUX STORE

const getCurrentPageData = ({ data, currentPageIndex }) => ({ data, currentPageIndex });
const getCompanies = createSelector(
  [ getCurrentPageData ],
  ({ data, currentPageIndex }) => data[currentPageIndex]
    //Because the array is frozen in strict mode, we need to copy the array before sorting it
    ? data[currentPageIndex].slice().sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    : []
);

export default connect(
  ({ allCompanies }) => {
    const { isLoading, failError } = allCompanies;
    const companies = getCompanies(allCompanies);
    return {
      companies,
      shouldLoadAllCompanies: !companies.length, // Load new content only if there is no content for current page;
      isLoading,
      failError
    }
  },
  allCompaniesActionCreators
)(Companies);