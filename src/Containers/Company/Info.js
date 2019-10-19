import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { companyActionCreators } from 'actionCreators';
import { createSelector } from 'reselect';
import { extractRowsFromObject } from 'helpers';
import CompanyInfo from 'Components/Company/Info';

const companyData = (companyInfo, company) => companyInfo.data[company] || {};
const getCompany = createSelector(
  [ companyData ],
  companyData => {
    const company = extractRowsFromObject(companyData);
    const { short_description, long_description } = companyData;
    return {
      company,
      summary: short_description,
      details: long_description
    }
  }
);

function InfoContainer({ loadCompanyInfo, ticker, ...props }) {

  useEffect(() => {
    loadCompanyInfo(ticker);
  }, [ loadCompanyInfo, ticker ]);

  return <CompanyInfo { ...props }/>

}

InfoContainer.defaultProps = {
  ticker: ''
};

InfoContainer.propTypes = {
  ticker: PropTypes.string.isRequired,
  loadCompanyInfo: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => {
    const { info } = state;
    const { ticker } = ownProps;
    const { isLoading, failError } = info;
    const { company, summary, details } = getCompany(info, ticker);

    return {
      ticker,
      company,
      summary,
      details,
      isLoading,
      failError
    }
  },
  companyActionCreators.info
)(InfoContainer)