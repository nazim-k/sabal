import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import News from '../Components/Company/News';
import { companyNewsActionCreators } from '../actionCreators';

function CompanyNewsContainer({ loadCompanyNews, nextPage, ticker, ...props }) {

  function handleScroll({ target }) {
    //Load New Related news when user scroll news to the bottom
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (scrollHeight - scrollTop - clientHeight === 0 && !props.isLoading)
      loadCompanyNews({ ticker, shouldUpdateExistingNews: true});
  }

  useEffect(() => {
    loadCompanyNews({ ticker });
  }, [ loadCompanyNews ]);

  return <News { ...props } handleScroll={ handleScroll }/>
}

export default connect(
  (state, ownProps) => {
    const { ticker } = ownProps;
    const { isLoading, failError, data, nextPage } = state.companyNews;
    const news = data[ticker] || [];
    return {
      news,
      nextPage,
      isLoading,
      failError
    }
  },
  companyNewsActionCreators
)(CompanyNewsContainer)