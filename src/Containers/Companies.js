import React, { useEffect } from 'react';
import { createSelector } from "reselect/lib/index";
import { allCompaniesActionCreators } from "../actionCreators";
import { connect } from "react-redux";
import { Companies } from '../Components';
import { transformArrayOfObjectsToRows } from '../helpers';

function CompaniesContainer(props) {

  const {
    loadAllCompanies,
    shouldLoadAllCompanies,
    nextCompaniesPage,
    prevCompaniesPage,
    ...restProps
  } = props;

  useEffect(() => {
    if (shouldLoadAllCompanies)
      loadAllCompanies();
  }, [loadAllCompanies, shouldLoadAllCompanies]);

  return <Companies { ...restProps }/>

}

const getCurrentPageData = ({ data, currentPageIndex }) => ({ data, currentPageIndex });
const getCompaniesAndLinks = createSelector(
  [ getCurrentPageData ],
  ({ data, currentPageIndex }) => {
    const companies = data[currentPageIndex]
      //Because the array is frozen in strict mode, we need to copy the array before sorting it
      ? data[currentPageIndex].slice().sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
      : [];

    return transformArrayOfObjectsToRows(companies);
  }
);

export default connect(
  ({ companies }) => {
    const { isLoading, failError } = companies;
    const { result, links } = getCompaniesAndLinks(companies);
    return {
      companies: result,
      links,
      shouldLoadAllCompanies: !result.length, // Load new content only if there is no content for current page;
      isLoading,
      failError
    }
  },
  allCompaniesActionCreators
)(CompaniesContainer);