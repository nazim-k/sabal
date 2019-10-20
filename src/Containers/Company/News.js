import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
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

NewsContainer.propTypes = {
  ticker: PropTypes.string.isRequired,
  loadCompanyNews: PropTypes.func.isRequired,
};

const getNews = createSelector(
  (state, ownProps) => state.company.news.data[ ownProps.ticker ] || [],
  news => news
);

export default connect(
  (state, ownProps) => {
    const { nexPage, isLoading, failError } = state.company.news;
    return {
      news: getNews(state, ownProps),
      nexPage,
      isLoading,
      failError
    }
  },
  companyActionCreators.news
)(NewsContainer)