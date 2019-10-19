import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import News from 'Components/Company/News';
import { companyActionCreators } from 'actionCreators';

function NewsContainer({ loadCompanyNews, nextPage, ticker, ...props }) {

  function handleScroll({ target }) {
    //Load New Related news when user scroll news to the bottom
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (scrollHeight - scrollTop - clientHeight < 10 && !props.isLoading)
      loadCompanyNews({ ticker, shouldUpdateExistingNews: true});
  }

  useEffect(() => {
    loadCompanyNews({ ticker });
  }, [ loadCompanyNews, ticker ]);

  return <News { ...props } handleScroll={ handleScroll }/>
}

NewsContainer.defaultProps = {
  ticker: ''
};

NewsContainer.propTypes = {
  ticker: PropTypes.string.isRequired,
  loadCompanyNews: PropTypes.func.isRequired,
};

export default connect(
  (state, ownProps) => {
    const { ticker } = ownProps;
    const { isLoading, failError, data, nextPage } = state.news;
    const news = data[ticker] || [];
    return {
      news,
      nextPage,
      isLoading,
      failError
    }
  },
  companyActionCreators.news
)(NewsContainer)