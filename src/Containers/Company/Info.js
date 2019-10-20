import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { companyActionCreators } from 'actionCreators';
import { createSelector } from 'reselect';
import { extractRowsFromObject } from 'helpers';
import CompanyInfo from 'Components/Company/Info';

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

const getCompanyInfo =createSelector(
  (state, ownProps) => state.company.info.data[ ownProps.ticker ] || {},
  data => {
    const company = extractRowsFromObject(data);
    const { short_description, long_description } = data;
    return {
      company,
      summary: short_description,
      details: long_description,
    }
  }
);

export default connect(
  (state, ownProps) => {
    const { isLoading, failError } = state.company.info;
    const { ticker } = ownProps;
    const { company, summary, details } = getCompanyInfo(state, ownProps);
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