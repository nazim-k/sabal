import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { companyInfoActionCreators } from '../actionCreators';
import { createSelector } from 'reselect';
import { extractRowsFromObject } from '../helpers';
import CompanyInfo from '../Components/Company/Info';

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

function CompanyInfoContainer({ loadCompanyInfo, ticker, ...props }) {

  useEffect(() => {
    loadCompanyInfo(ticker);
  }, [ loadCompanyInfo, ticker ]);

  return <CompanyInfo { ...props }/>

}

export default connect(
  (state, ownProps) => {
    const { companyInfo } = state;
    const { ticker } = ownProps;
    const { isLoading, failError } = companyInfo;
    const { company, summary, details } = getCompany(companyInfo, ticker);

    return {
      ticker,
      company,
      summary,
      details,
      isLoading,
      failError
    }
  },
  companyInfoActionCreators
)(CompanyInfoContainer)