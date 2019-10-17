import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Comments from '../Components/Company/Comments';

const getCommentsByTicker = (state, ticker) => state.companyComments[ticker];
const getComments = createSelector(
  [ getCommentsByTicker ],
  comments => comments || []
);
const CompanyComments = ({ companyComments: comments }) => <Comments comments={ comments }/>;

export default connect(
  (state, ownProps) => {
    const { ticker } = ownProps;
    return {
      companyComments: getComments(state, ticker),
    }
  }
)(CompanyComments)