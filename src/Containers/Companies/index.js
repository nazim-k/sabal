import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from "reselect";
import { companiesActionCreators } from "actionCreators";
import { connect } from "react-redux";
import { Companies } from 'Components';
import { transformArrayOfObjectsToRows } from 'helpers';

function CompaniesContainer(props) {

  const { loadAllCompanies, shouldLoadAllCompanies, ...restProps } = props;

  useEffect(() => {
    if (shouldLoadAllCompanies)
      loadAllCompanies();
  }, [loadAllCompanies, shouldLoadAllCompanies]);

  return <Companies { ...restProps }/>

}

CompaniesContainer.defaultProps = {
  shouldLoadAllCompanies: true
};

CompaniesContainer.propTypes = {
  shouldLoadAllCompanies: PropTypes.bool.isRequired,
  loadAllCompanies: PropTypes.func.isRequired,
};

const getCompaniesAndLinks = createSelector(
  companies => companies.data[companies.currentPageIndex] || [],
  data => {
    const companies = data.slice().sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    return transformArrayOfObjectsToRows(companies);
  }
);

export default connect(
  ({ companies }) => {
    const { currentPageIndex, nextPage, isLoading, failError } = companies;
    const { result, links } = getCompaniesAndLinks(companies);
    return {
      companies: result,
      links,
      currentPageIndex,
      nextPage,
      shouldLoadAllCompanies: !result.length, // Load new content only if there is no content for current page;
      isLoading,
      failError
    }
  },
  companiesActionCreators
)(CompaniesContainer);